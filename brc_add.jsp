<%@page contentType="text/html; charset=utf-8" language="java" errorPage=""%>
<%@page import="java.util.*, java.io.*" %>
<%@page import="java.sql.*" %>
<%@page import="java.text.SimpleDateFormat,java.util.Date" %>
<%@page import="org.mskcc.cbio.portal.servlet.QueryBuilder" %>
<%@page import="org.mskcc.cbio.portal.util.GlobalProperties" %>
<%@page import="org.mskcc.cbio.portal.dao.JdbcUtil" %>
<%@page import="org.mskcc.cbio.portal.dao.DaoClinicalData" %>
<%/*@page import="jxl.*" */%>
<%
    request.setCharacterEncoding("utf-8");

    // variables for file upload
    String now = new SimpleDateFormat("yyyyMMdd_HH:mm:ss.SSS").format(new Date());

    String userId = GlobalProperties.getAuthenticatedUserName();
    String studyId = request.getParameter("studyId");
    String caseId = request.getParameter("caseId");
    String specimenId = request.getParameter("specimenId");

    // variables for data handling
    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    String sql = null;
    String[][] arrData = null;
    String[] arrError = new String[13];

    int row = 0, duplicateRow = 0;

    /* var validataion */

    if(userId==null || userId.equals("")){
        out.print("<script> alert('Error : Can not find userId');</script>");
        return;
    }else if(studyId==null || studyId.equals("")){
        out.print("<script> alert('Error : Can not find studyId');</script>");
        return;
    }else if(caseId==null || caseId.equals("")){
        out.print("<script> alert('Error : Can not find caseId');</script>");
        return;
    }else if(specimenId==null || specimenId.equals("")){
        out.print("<script> alert('Error : Can not find specimenId');</script>");
        return;
    }



    try {
        conn = JdbcUtil.getDbConnection(DaoClinicalData.class);
        conn.setAutoCommit(false);
        
        if(conn == null){
            out.print("<script> alert('Error : Can not connect to db');</script>");
        }
      
        if(userId == null || userId.equals("")){    // || userId.equals("anonymousUser")){
          out.print("<script>alert('Could not verify ID' );</script>");
          return;
        }

        // Check for the existence of duplicate values
        sql = "SELECT COUNT(*) FROM brc_request WHERE `USER_ID`=? AND `CANCER_STUDY_IDENTIFIER`=? AND `PATIENT_ID`=? AND `SPECIMEN_ID`=? AND `CLINICAL_EVENT_ID`=(select CLINICAL_EVENT_ID from clinical_event_data where `VALUE`=?)";
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, userId);
        pstmt.setString(2, studyId);
        pstmt.setString(3, caseId);
        pstmt.setString(4, specimenId);
        pstmt.setString(5, specimenId);
 
        rs = pstmt.executeQuery();
        rs.next();
        int rowCount = rs.getInt(1);

        if(rowCount > 0){
            out.print("<script> alert('There is a duplicate request.');</script>");
            return;
        }else{
            // insert mutation info // insert ignore into TB_NAME
            /*
            INSERT INTO brc_request (`USER_ID`, `CANCER_STUDY_IDENTIFIER`, `PATIENT_ID`, `SPECIMEN_ID`, `CLINICAL_EVENT_ID`) 
                VALUES ('test','pilot','3','2209', (select CLINICAL_EVENT_ID from clinical_event_data where `VALUE`='2209'))
            */
            sql = "INSERT INTO brc_request (`USER_ID`, `CANCER_STUDY_IDENTIFIER`, `PATIENT_ID`, `SPECIMEN_ID`, `CLINICAL_EVENT_ID`) VALUES (?,?,?,?,(SELECT MAX(CLINICAL_EVENT_ID) FROM clinical_event_data WHERE `VALUE`=?))";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, userId);
            pstmt.setString(2, studyId);
            pstmt.setString(3, caseId);
            pstmt.setString(4, specimenId);
            pstmt.setString(5, specimenId);
            pstmt.executeUpdate();

            pstmt.clearParameters();
            
            out.print("<script> alert('Your BRC request has been added to your list.');</script>");
        }
    }/* catch (IOException e) {
        // TODO Auto-generated catch block
        out.print("<script> alert('Error : IOException');</script>");
        conn.rollback();
        e.printStackTrace();
    }*/catch(StringIndexOutOfBoundsException e){
        out.print("<script> alert('Error : StringIndexOutOfBoundsException');</script>");
        e.printStackTrace();
    } catch (SQLException e) {
        // TODO Auto-generated catch block
        out.print("<script> alert('Error : SQLException');</script>");
        e.printStackTrace();
    } catch (Exception e) {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        e.printStackTrace(pw);
        System.out.println(sw.toString().toUpperCase());
        //out.print("<script> alert('Error : Exception\n" + sw.toString().toUpperCase() + "');</script>");
        e.printStackTrace();
    } finally {
        conn.commit();
        JdbcUtil.closeAll(DaoClinicalData.class, conn, pstmt, rs);
    }
%>
    </body>
</html>