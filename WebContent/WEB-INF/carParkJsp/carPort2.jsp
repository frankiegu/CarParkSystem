<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String basepath = application.getContextPath();
	
%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>当前车辆出入库页面</title>

<link rel="stylesheet" type="text/css" href=<%=basepath+"/css/bootstrap.css"%> >
<script type="text/javascript" charset="UTF-8" src=<%=basepath+"/js/jquery-3.3.1.js"%>></script>
<script type="text/javascript" charset="UTF-8" src=<%=basepath+"/js/bootstrap.js"%>></script>
<script type="text/javascript" charset="UTF-8" src=<%=basepath+"/js/my/fabric.min.js"%>></script>
<!-- laydate控件方式,layDate 采用原生 JavaScript 编写，不依赖任何第三方库，兼容所有浏览器（IE6/7除外） -->
<script type="text/javascript" src=<%=basepath+"/js/my/carPort2.js"%> ></script>  
	

	
</head>
<body>
	<h1>车辆出入库</h1>
<!-- 	查询条件框部分开始 -->
	<div >
			<button class="btn btn-primary" data-toggle="modal" data-target="#myModal1">待用按钮</button>	
			<button type="button" class="btn btn-primary" onclick="useHelp()">使用帮助</button>		
	</div>
<!-- 	查询条件框部分结束 -->
	
<!-- 	车位鸟瞰图画布开始 -->
	<div>
		<canvas id="myCanvas" width="2000" height="3000"></canvas>
	</div>
<!-- 	车位鸟瞰图画布结束 -->



<!-- 				车辆入库模态框开始 -->
				<!-- 模态框（Modal） -->
				<div class="modal fade" id="myModal2" tabindex="-1" role="dialog"
					aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal"
									aria-hidden="true"></button>
								<h4 class="modal-title" id="myModalLabel">车辆入库</h4>
							</div>
							<div class="modal-body" align="center">
<!-- 								模态框中表单开始 -->
					<!-- 		上传车牌照片部分开始 -->
						<form id="uploadForm">
							<div >
								<label >车位编号：</label>
								<label id="inCarPort_id">车位编号</label>
								<input class="form-control" type="hidden" id="inCarPort_num" name="inCarPort_num"/>
							</div>
							<div class="col-sm-5">
								<label for="inputEmail3" class="col-sm-5 control-label">上传车牌照片：</label>
								<input type="file" name="file" />
							</div>
							<div class="col-sm-2">
<!-- 								<input type="button" value="上传" onclick="doUpload()" -->
<!-- 									class="btn btn-default" /> -->
							</div>
						</form>
					<!-- 		上传车牌照片部分结束 -->
<!-- 								模态框中表单结束 -->
							</div>
							<div class="modal-footer">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-default" onclick="doUploadIn()" data-dismiss="modal">上传</button>		
									<button type="button" class="btn btn-primary" data-dismiss="modal">返回</button>
								</div>
							</div>
						</div>
						<!-- /.modal-content -->
					</div>
					<!-- /.modal -->
				</div>
<!-- 			车辆入库模态框结束 -->

<!-- 				车辆出库模态框开始 -->
				<!-- 模态框（Modal） -->
				<div class="modal fade" id="myModal1" tabindex="-1" role="dialog"
					aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal"
									aria-hidden="true"></button>
								<h4 class="modal-title" id="myModalLabel">车辆出库</h4>
							</div>
							<div class="modal-body" align="center">
<!-- 								模态框中表单开始 -->
					<!-- 		上传车牌照片部分开始 -->
						<form id="uploadForm1">
							<div >
								<label >车位编号：</label>
								<label id="outCarPort_id">车位编号</label>
								<input class="form-control" type="hidden" id="outCarPort_num" name="outCarPort_num"/>
							</div>
							<div class="col-sm-5">
								<label for="inputEmail3" class="col-sm-5 control-label">上传车牌照片：</label>
								<input type="file" name="file" />
							</div>
							<div class="col-sm-2">
							</div>
						</form>
					<!-- 		上传车牌照片部分结束 -->
<!-- 								模态框中表单结束 -->
							</div>
							<div class="modal-footer">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-default" onclick="doUploadOut()" data-dismiss="modal">上传</button>		
									<button type="button" class="btn btn-primary" data-dismiss="modal">返回</button>
								</div>
							</div>
						</div>
						<!-- /.modal-content -->
					</div>
					<!-- /.modal -->
				</div>
<!-- 			车辆出库模态框结束 -->

</body>
</html>