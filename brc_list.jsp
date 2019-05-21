<%@page contentType="text/html; charset=utf-8" language="java" errorPage=""%>
<%@page import="java.util.*, java.io.*" %>
<%@page import="java.sql.*" %>
<%@page import="java.text.SimpleDateFormat,java.util.Date" %>
<%@page import="org.mskcc.cbio.portal.servlet.QueryBuilder" %>
<%@page import="org.mskcc.cbio.portal.util.GlobalProperties" %>
<%@page import="org.mskcc.cbio.portal.dao.JdbcUtil" %>
<%@page import="org.mskcc.cbio.portal.dao.DaoClinicalData" %>
<%@page import="org.apache.commons.lang3.StringUtils" %>
<%/*@page import="jxl.*" */%>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%
    request.setCharacterEncoding("utf-8");

    String siteTitle = GlobalProperties.getTitle() + "::BRC LIST";

    // variables for search
    String userId = GlobalProperties.getAuthenticatedUserName();
    String studyId = request.getParameter("studyId");
    String caseId = request.getParameter("caseId");
    String specimenId = request.getParameter("specimenId");

    // validation check
    if(userId==null || userId.equals("")){
        out.print("<script> alert('Error : Can not find userId');</script>");
        return;
    }/*else if(studyId==null || studyId.equals("")){
        out.print("<script> alert('Error : Can not find studyId');</script>");
        return;
    }else if(caseId==null || caseId.equals("")){
        out.print("<script> alert('Error : Can not find caseId');</script>");
        return;
    }else if(specimenId==null || specimenId.equals("")){
        out.print("<script> alert('Error : Can not find specimenId');</script>");
        return;
    }*/

    // variables for data handling
    Connection conn = null;
    String sqlWhere = "";
    String sql = "";
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    String[][] arrData = null;
    String[] arrError = new String[13];
    int row = 0;
 
    try {
        conn = JdbcUtil.getDbConnection(DaoClinicalData.class);;
        
        if(conn == null){
            out.print("<script> alert('Error : Can not connect to db');</script>");
            return;
        }

        sql = "SELECT SEQ, BRC_CATEGORY, CLINICAL_EVENT_ID, PATIENT_ID, CANCER_STUDY_IDENTIFIER "
            + "         , (SELECT `NAME` FROM cancer_study WHERE cancer_study.CANCER_STUDY_IDENTIFIER=brc_request.CANCER_STUDY_IDENTIFIER) AS CANCER_STUDY_NAME "
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

        while (rs.next()) {
            String[] brcInfo = new String[]{Integer.toString(rs.getInt("SEQ")),
						   rs.getString("BRC_CATEGORY"),
						   rs.getString("CLINICAL_EVENT_ID"),
						   rs.getString("PATIENT_ID"),
						   rs.getString("CANCER_STUDY_IDENTIFIER"),
						   rs.getString("CANCER_STUDY_NAME"),
						   rs.getString("BRC_ID"),
						   rs.getString("SPECIMEN_ID"),
						   Float.toString(Float.parseFloat(rs.getString("QUANTITY"))),
						   rs.getString("ANATOMIC_SITE_SOURCE_VALUE"),
						   rs.getString("SPECIMEN_TYPE_DETAILED"),
						   rs.getString("ORDER_YN"),
						   rs.getString("STATUS"),
						   rs.getString("ORDER_DATE")};
            listRequest.add(brcInfo);
        }
        
        for (String[] arr : listRequest) {
            //out.println(Arrays.toString(arr));
        }
        //out.print(Arrays.toString(listRequest.toArray()));
        request.setAttribute("listRequest", listRequest);
        
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
%>
<t:template title="<%= siteTitle %>" defaultRightColumn="false" fixedWidth="true">

    <jsp:attribute name="head_area">
        <script>
            window.loadReactApp({ defaultRoute: 'blank' });
        </script>
    </jsp:attribute>

    <jsp:attribute name="body_area">

    <h1>BRC List</h1>
        <h2 id="h2_title"></h2>
        <!-- from here : search area -->
        <div class="brcSearch" style="text-align: right;">
            <table class="table table-bordered">
                <tbody align="left">
                    <tr>
                        <th width="15%">Status</th>
                        <td width="30%">
                            <!-- default : waitlist -->
                            <input type="checkbox" name="waitList" value="waitList" ><label>Wait List</label>
                            <input type="checkbox" name="doneList" value="doneList" ><label>Done List</label>
                        </td>
                        <th width="15%">Date</th>
                        <td><input type="date" placeholder="Start Date" style="width:150px"> ~ <input type="date" placeholder="End Date" style="width:150px"></td>
                    </tr>
                    <tr>
                        <th>Category</th>
                        <td>
                            <select name="category" id="category">
                                <!-- default : all  -->
                                <option value="all" selected>All</option>
                                <!-- popup layer : managing category(table column : user_id, category_name) -->
                                <option value="editCategory">Edit Category</option>
                                <option value="lineCategory">----------------</option>
                                <option value="category1">Category_1</option>
                                <option value="category1">Category_2</option>
                            </select>
                        </td>
                        <th>BRC ID</th>
                        <td><input type="text" placeholder="BRC ID"></td>
                    </tr>
                </tbody>
            </table>
            <div class="brcSearchBtn" style="text-align: center;">
                <input type="button" name="searchBtn" value="Search" class="btn btn-sm btn-primary">
            </div>
        </div>
        <!-- to here : search area -->
        <br>
        <div class="brcButon">
            <input type="button" name="history" value="History" class="btn btn-sm btn-primary" style="margin-bottom: 10px;">
        </div>
        <div class="brcListTable">
            <table class="table table-bordered">
                <tr>
                    <th><input type="checkbox"></th><!-- select all items -->
                    <th>No.</th>
                    <%-- <th>Category</th> --%>
                    <th>Study</th>
                    <th>Patient ID</th>
                    <th>Specimen ID</th>
                    <th>BRC ID</th>
                    <th>Quantity</th>
                    <th>Anatomic Sites</th>
                    <th>Specimen Type</th>
                    <th>Patient View</th>
                    <%-- <th>Status</th> --%>
                    <th>Date</th>
                </tr>
    <c:if test="${!empty listRequest}">
        <c:forEach var="item" items="${listRequest}" varStatus="status">
                <tr>
                    <td><input type="checkbox" <c:if test="${!empty item[12]}">disabled</c:if>></td>
                    <td>${status.count}</td>
                    <%-- <td>${item[1]}</td> --%>
                    <td>${item[5]}</td>
                    <td>${item[3]}</td>
                    <td>${item[7]}</td>
                    <td>${item[6]}</td>
                    <td>${item[8]}</td>
                    <td>${item[9]}</td>
                    <td>${item[10]}</td>
                    <td><a href="/cbioportal/case.do#/patient?caseId=${item[3]}&studyId=${item[4]}" target="_blank"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a></td>
                    <%-- <td>
                    <c:choose>
                        <c:when test="${item[12] eq 'W'}">Waiting</c:when>
                        <c:when test="${item[12] eq 'D'}">Done</c:when>
                        <c:otherwise >${item[12]}</c:otherwise>
                    </c:choose>
                    </td> --%>
                    <td>${item[13]}</td>
                </tr>

        </c:forEach>
    </c:if>
            </table>
        </div>
        <!-- from here : button area for selected item -->
        <div class="brcListBtn">
            <input type="button" name="btnCsv" value="Download CSV File" class="btn btn-sm btn-success" onclick="location.href='test_csv.jsp' ">
            <%-- <input type="button" value="Change Category" class="btn btn-sm btn-info">
            <input type="button" value="Delete Selected Items" class="btn btn-sm btn-warning">
            <input type="button" value="Request" class="btn btn-sm btn-success"> --%>
        </div>
        <!-- to here : button area for selected item -->
        <!-- from here : page button area -->
        <div class="btnPage" style="text-align:center;">
            <button disabled="" type="button" class="btn btn-sm btn-default">
                <i class="fa fa-angle-double-left"></i>
            </button>
            <button disabled="" type="button" class="prevPageBtn btn btn-sm btn-default">
                <i class="fa fa-angle-left"></i>
            </button>
            <span class="btn btn-sm btn-default disabled" style="cursor: default; color: black;">
                <u><b>1</b></u>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">5</a>
                <a href="">6</a>
                <a href="">7</a>
                <a href="">8</a>
                <a href="">9</a>
                <a href="">10</a>
            </span>
            <button type="button" class="nextPageBtn btn btn-sm btn-default">
                <i class="fa fa-angle-right"></i>
            </button>
            <button type="button" class="btn btn-sm btn-default">
                <i class="fa fa-angle-double-right"></i>
            </button>
        </div>
        <!-- to here : page button area -->
        <hr>
        <div id="reactRoot" class="hidden"></div>

    </jsp:attribute>
    
</t:template>
