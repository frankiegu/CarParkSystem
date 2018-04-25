<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<html>
<head>

<!-- start: Meta -->
<meta charset="utf-8">
<title>Bootstrap Metro Dashboard by Dennis Ji for ARM demo</title>
<base href="<%=basePath%>">
<meta name="description" content="Bootstrap Metro Dashboard">
<meta name="author" content="Dennis Ji">
<meta name="keyword"
	content="Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
<!-- end: Meta -->

<!-- start: Mobile Specific -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- end: Mobile Specific -->

<!-- start: CSS -->
<link id="bootstrap-style" href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/bootstrap-responsive.min.css" rel="stylesheet">
<link id="base-style" href="css/style.css" rel="stylesheet">
<link id="base-style-responsive" href="css/style-responsive.css"
	rel="stylesheet">
<link
	href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext'
	rel='stylesheet' type='text/css'>
<!-- end: CSS -->

<!-- start:自己的包 -->
<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<script type="text/javascript" charset="UTF-8" src="js/jquery-3.3.1.js"></script>
<script type="text/javascript" charset="UTF-8" src="js/bootstrap.js"></script>
<!-- laydate控件方式,layDate 采用原生 JavaScript 编写，不依赖任何第三方库，兼容所有浏览器（IE6/7除外） -->
<!-- <script src="js/laydate/laydate.js"></script> -->
<!-- 改成你的路径 -->
<script type="text/javascript" src="js/zlbjs/vip_search.js"></script>
<!-- end:自己的包 -->

<!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
	  	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<link id="ie-style" href="css/ie.css" rel="stylesheet">
	<![endif]-->

<!--[if IE 9]>
		<link id="ie9style" href="css/ie9.css" rel="stylesheet">
	<![endif]-->

<!-- start: Favicon -->
<link rel="shortcut icon" href="img/favicon.ico">
<!-- end: Favicon -->

<style>
	body{
		 overflow:hidden;
		 width:95%;
		 margin:auto;
		 height:2000px; //这里要定义本页面最小高度，方便iframe自适应
	} 
</style>		
		
</head>
<body>
    <!-- start: content -->
	<div id="content" class="span11">
		
		<!-- start: 页头 -->
		<ul class="breadcrumb">
			<li>
				<i class="icon-home"></i>
				<a href="index.html">Home</a> 
				<i class="icon-angle-right"></i>
			</li>
			<li><a href="javascript:void(0)">白名单管理</a></li>
		</ul>
		<!-- end: 页头 -->
		
		<div class="row-fluid sortable">		
			<div class="box span12">
			
				<!-- start: box-header -->
				<div class="box-header" data-original-title>
					<h2><i class="halflings-icon white user"></i><span class="break"></span>Members</h2>
					<div class="box-icon">
						<a href="javascript:void(0)" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
						<a href="javascript:void(0)" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
						<a href="javascript:void(0)" class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<!-- end: box-header -->
				
				<!-- start: box-content -->
				<div class="box-content" style="display: block;">		
					<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper" role="grid">
					
					<!-- start: 搜索表单 -->
					
				
			
				
					<form id="condition_from" method="post">
						<!-- start: box-工具栏 -->
<!-- 						<div class="row-fluid"> -->
							<!-- start: box-页数 -->
<!-- 							<div class="span6"> -->
							<!-- class="dataTables_length"  class="dataTables_filter"  -->
<!-- 								<div id="DataTables_Table_0_length"> -->
									<span>每页条量：
										<select name="pageSize" onchange="search()" size="1" aria-controls="DataTables_Table_0">
											<option value="10" selected="selected">10</option>
											<option value="20">20</option>
											<option value="30">30</option>
											<option value="50">50</option>
										</select> 
									</span>
<!-- 								</div> -->
<!-- 							</div> -->
							<!-- end: box-页数-->
							
							
							
							<!-- start: box-搜索-->
<!-- 							<div class="span6"> -->
<!-- 								<div id="DataTables_Table_0_filter"> -->
									&#8195
										
									
									<span>车牌号 <input name="car_park_license" type="text" oninput="search()" aria-controls="DataTables_Table_0"></span>
<!-- 								</div> -->
<!-- 							</div> -->
									&#8195
							
									<button class="btn btn-primary" data-toggle="modal" data-target="#myModal1">增加</button>	
							<!-- end: box-搜索-->
					</form>	
									
<!-- 						</div> -->
						<!-- end: box-工具栏 -->
					<!-- end: 搜索表单 -->
					
					<!-- start: 翻页条件记录 -->
<!-- 					<form id="pageRecondForm" method="post"> -->
<!-- 						<span id="pageSizeRecond" name="pageSize"></span> -->
						
<!-- 					</form>	 -->
					<!-- end: 搜索条件记录 -->
					
						<!-- start: table -->
						<table class="table table-striped table-bordered bootstrap-datatable datatable dataTable" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
							  <thead>
								  <tr role="row">				
								  	<th class="sorting_asc" role="columnheader" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Username: activate to sort column descending" >序号</th>
								  	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Date registered: activate to sort column ascending">车牌</th>
								 	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Date registered: activate to sort column ascending" >车辆状态</th>
									<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending"">操作</th>
								  </tr>
							  </thead>   
									  
							  <tbody role="alert" aria-live="polite" aria-relevant="all" id="myShowbody">
							  		
								
							</tbody>
						</table>
						<!-- end: table -->
											
						<div class="row-fluid">
							<!-- start: 分页-信息 -->
							<div class="span12">
								<div class="dataTables_info" id="DataTables_Table_0_info">Showing 1 to 25 of 
								
								<span id="total"></span> entries			
								</div>
							</div>
							<!-- start: 分页-信息 -->
							
							<!-- end: 分页-按钮组 -->
							<div class="span12 center">
								<div class="dataTables_paginate paging_bootstrap pagination">
									<ul>
										<span id="pages" style="display: none"></span>
										<li class="prev"><a id="lastPage" href="javascript:void(0)" onclick="lastPage()">← Previous</a></li>
										<li class="active"><a id="pageNum" href="javascript:void(0)">1</a></li>
<!-- 										<li id="" ><a href="#">2</a></li> -->
										<li class="next"><a id="nextPage" href="javascript:void(0)" onclick="nextPage()">Next → </a></li>
									</ul>
								</div>
							</div>
							<!-- end: 分页-按钮组 -->
						</div>
						
					</div>
				</div>
				<!-- end: box-content -->
							
			</div>
		</div>

	</div>
	<!-- start: content -->





	<!-- 	查询结果表格部分结束 -->

	<!-- 				查看单模态框开始 -->

	<!-- 模态框（Modal） -->
	<div class="modal fade" id="myModal1" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title" id="myModalLabel">新增车辆白名单</h4>
				</div>
				<div class="modal-body" align="center">
					<!-- 								模态框中表单开始 -->
					<!-- 				要增加的人员姓名 -->
					<div>
						<label>车牌号</label> <input id="newvip_Name" type="text"
							onchange="change_carvip()"> <label id="car_msg">
						</label>
					</div>
					<br></br> <br></br>


					<!-- 								模态框中表单结束 -->
				</div>
				<div class="modal-footer">
					<div class="col-sm-offset-2 col-sm-10">
						<!-- 									<button type="submit" class="btn btn-primary">入库</button> -->
						<!-- 									<button type="button" onclick="" class="btn btn-primary">审核通过</button> -->
						<button type="button" class="btn btn-primary"
							onclick="addVipcar()" data-dismiss="modal">提交</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
					</div>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal -->
	</div>
	<!-- 				查看单模态框结束 -->

	<!-- 				修改人员模态框开始 -->

	<!-- 模态框（Modal） -->
	<div class="modal fade" id="myModal2" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title" id="myModalLabel">修改白名单</h4>
				</div>
				<div class="modal-body" align="center">
					<!-- 								模态框中表单开始 -->
					<!-- 				要增加的人员姓名 -->
					<div>
						<label> 当前车牌 </label> <label id="changecar_park_license"></label>
					</div>
					<br></br>
					<!-- 				要修改的车牌号 -->
					<div>
						<label>车牌号：</label> <input type="text"
							id="modifiercarparkchangeCarparklicense"
							onchange="changemoodife_carvip()">
					</div>
					<br></br>

					<div></div>
					<br></br>

					<div></div>
					<br></br>


					<!-- 								模态框中表单结束 -->
				</div>
				<div class="modal-footer">
					<div class="col-sm-offset-2 col-sm-10">

						<button type="button" class="btn btn-primary"
							onclick="changeCarparklicense()" data-dismiss="modal">修改</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
					</div>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal -->
	</div>
	<!-- 			修改人员模态框结束 -->
</body>
</html>