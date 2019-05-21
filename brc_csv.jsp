<%@page contentType="text/html; charset=utf-8" language="java" errorPage=""%>
<%@page import="java.util.*, java.io.*" %>
<%@page import="java.sql.*" %>
<%@page import="java.text.SimpleDateFormat,java.util.Date" %>
<%@page import="org.mskcc.cbio.portal.servlet.QueryBuilder" %>
<%@page import="org.mskcc.cbio.portal.util.GlobalProperties" %>
<%@page import="org.mskcc.cbio.portal.dao.JdbcUtil" %>
<%@page import="org.mskcc.cbio.portal.dao.DaoClinicalData" %>
<%@page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%
    request.setCharacterEncoding("utf-8");
    response.setHeader("Content-Disposition", "attachment; filename="+new SimpleDateFormat("yyyyMMdd_HH:mm:ss").format(new Date())+".csv"); // filename
	response.setHeader("Content-Type", "text/csv; charset=MS949");  //content type

    String siteTitle = GlobalProperties.getTitle() + "::BRC LIST";

    // variables for data handling
    Connection conn = null;
    String sqlWhere = "";
    String sql = "";
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    String[][] arrData = null;
    String[] arrError = new String[13];

    int row = 0, duplicateRow = 0;
 
    try {
        conn = JdbcUtil.getDbConnection(DaoClinicalData.class);;
        
        if(conn == null){
            out.print("<script> alert('Error : Can not connect to db');</script>");
            return;
        }

        //pstmt = conn.prepareStatement("SELECT * FROM brc_request WHERE USER_ID=?");
        String userId = GlobalProperties.getAuthenticatedUserName();
        if(userId == null || userId.equals("")){
            out.print("<script>alert('Could not verify ID' );</script>");
            return;
        }

        sql = "SELECT SEQ, BRC_CATEGORY, CLINICAL_EVENT_ID, CANCER_STUDY_IDENTIFIER, PATIENT_ID "
            + "         , (SELECT `VALUE` FROM clinical_event_data WHERE clinical_event_data.CLINICAL_EVENT_ID=brc_request.CLINICAL_EVENT_ID AND `KEY`='BRC_ID') AS BRC_ID "
            + "         , (SELECT `VALUE` FROM clinical_event_data WHERE clinical_event_data.CLINICAL_EVENT_ID=brc_request.CLINICAL_EVENT_ID AND `KEY`='SPECIMEN_ID') AS SPECIMEN_ID "
            + "         , (SELECT `VALUE` FROM clinical_event_data WHERE clinical_event_data.CLINICAL_EVENT_ID=brc_request.CLINICAL_EVENT_ID AND `KEY`='QUANTITY') AS QUANTITY "
            + "         , (SELECT `VALUE` FROM clinical_event_data WHERE clinical_event_data.CLINICAL_EVENT_ID=brc_request.CLINICAL_EVENT_ID AND `KEY`='ANATOMIC_SITE_SOURCE_VALUE') AS ANATOMIC_SITE_SOURCE_VALUE "
            + "         , (SELECT `VALUE` FROM clinical_event_data WHERE clinical_event_data.CLINICAL_EVENT_ID=brc_request.CLINICAL_EVENT_ID AND `KEY`='SPECIMEN_TYPE_DETAILED') AS SPECIMEN_TYPE_DETAILED "
            + "         , STATUS, ORDER_YN, date_format(ORDER_DATE, '%Y-%m-%d') AS ORDER_DATE "
            + "FROM brc_request WHERE USER_ID = ? ";
        pstmt = conn.prepareStatement(sql + sqlWhere);

        pstmt.setString(1, userId);

        rs = pstmt.executeQuery();

        ArrayList<String[]> listRequest = new ArrayList<String[]>();

        if (rs != null){
            out.println("No., Category, Study, Patient ID, Specimen ID, BRC ID, Quantity, Anatomic Sites, Specimen Type, Status, Date");
            while (rs.next()) {
                String[] brcInfo = new String[]{Integer.toString(rs.getInt("SEQ")),
                            rs.getString("BRC_CATEGORY"),
                            rs.getString("CLINICAL_EVENT_ID"),
                            rs.getString("CANCER_STUDY_IDENTIFIER"),
                            rs.getString("PATIENT_ID"),
                            rs.getString("BRC_ID"),
                            rs.getString("SPECIMEN_ID"),
                            Float.toString(Float.parseFloat(rs.getString("QUANTITY"))),
                            rs.getString("ANATOMIC_SITE_SOURCE_VALUE"),
                            rs.getString("SPECIMEN_TYPE_DETAILED"),
                            rs.getString("ORDER_YN"),
                            rs.getString("STATUS"),
                            rs.getString("ORDER_DATE")};
                listRequest.add(brcInfo);
                //out.println(Arrays.toString(brcInfo));
                out.println(/*Integer.toString(rs.getInt("SEQ"))+", "+*/
                            ++row+", "+
                            rs.getString("BRC_CATEGORY")+", "+
                            /*rs.getString("CLINICAL_EVENT_ID")+", "+*/
                            rs.getString("CANCER_STUDY_IDENTIFIER")+", "+
                            rs.getString("PATIENT_ID")+", "+
                            rs.getString("BRC_ID")+", "+
                            rs.getString("SPECIMEN_ID")+", "+
                            Float.toString(Float.parseFloat(rs.getString("QUANTITY")))+", "+
                            rs.getString("ANATOMIC_SITE_SOURCE_VALUE")+", "+
                            rs.getString("SPECIMEN_TYPE_DETAILED")+", "+
                           /* rs.getString("ORDER_YN")+", "+*/
                            rs.getString("STATUS")+", "+
                            rs.getString("ORDER_DATE"));
            }
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
    }/* catch (Exception e) {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        e.printStackTrace(pw);
        //System.out.println(sw.toString().toUpperCase());
        //out.print("<script> alert('Error : Exception\n" + sw.toString().toUpperCase() + "');</script>");
        e.printStackTrace();
    }*/ finally {
        JdbcUtil.closeAll(DaoClinicalData.class, conn, pstmt, rs);
    }
/*
<c:if test="${!empty listRequest}">
<c:forEach var="item" items="${listRequest}" varStatus="status">
    ${status.count}, ${item[1]}, ${item[3]}, ${item[4]}, ${item[6]}, ${item[5]}, ${item[7]}, ${item[8]}, ${item[9]}, <c:choose><c:when test="${item[11] eq 'W'}">Waiting</c:when><c:when test="${item[11] eq 'D'}">Done</c:when><c:otherwise >${item[11]}</c:otherwise></c:choose>, ${item[12]}
</c:forEach>
</c:if>
*/
%>
