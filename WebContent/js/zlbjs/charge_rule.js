/**
 * 
 */

var numberzhengze = /0|(^[1-9]+\d*$)/;
function blur_charge_rule_1() {
	var charge_rule_1 = $("#charge_rule_1").val();
	if (charge_rule_1 == '') {

		$("#charge_rule_1_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(charge_rule_1)) {
		$("#charge_rule_1_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#charge_rule_1_msg").html("通过").css("color", "green");
		return true;
	}

}
function blur_charge_rule_2() {
	var charge_rule_2 = $("#charge_rule_2").val();
	if (charge_rule_2 == '') {

		$("#charge_rule_2_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(charge_rule_2)) {
		$("#charge_rule_2_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#charge_rule_2_msg").html("通过").css("color", "green");
		return true;
	}

}
function blur_charge_rule_3() {
	var charge_rule_3 = $("#charge_rule_3").val();
	if (charge_rule_3 == '') {

		$("#charge_rule_3_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(charge_rule_3)) {
		$("#charge_rule_3_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#charge_rule_3_msg").html("通过").css("color", "green");
		return true;
	}

}
function blur_charge_rule_4() {
	var charge_rule_4 = $("#charge_rule_4").val();
	if (charge_rule_4 == '') {

		$("#charge_rule_4_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(charge_rule_4)) {
		$("#charge_rule_4_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#charge_rule_4_msg").html("通过").css("color", "green");
		return true;
	}

}
function blur_charge_rule_5() {
	var charge_rule_5 = $("#charge_rule_5").val();
	if (charge_rule_5 == '') {

		$("#charge_rule_5_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(charge_rule_5)) {
		$("#charge_rule_5_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#charge_rule_5_msg").html("通过").css("color", "green");
		return true;
	}

}

function checkregis() {
	var flag_charge_rule_1 = blur_charge_rule_1();
	var flag_charge_rule_2 = blur_charge_rule_2();
	var flag_charge_rule_3 = blur_charge_rule_3();
	var flag_charge_rule_4 = blur_charge_rule_4();
	var flag_charge_rule_5 = blur_charge_rule_5();

	if (flag_charge_rule_1 == true && flag_charge_rule_2 == true
			&& flag_charge_rule_3 == true && flag_charge_rule_4 == true
			&& flag_charge_rule_5 == true) {

		return true;
	} else {
		alert("请输入正确的值");
		return false;
	}
}

function addchargerule() {
	var flag_charge_rule_1 = blur_charge_rule_1();
	var flag_charge_rule_2 = blur_charge_rule_2();
	var flag_charge_rule_3 = blur_charge_rule_3();
	var flag_charge_rule_4 = blur_charge_rule_4();
	var flag_charge_rule_5 = blur_charge_rule_5();
	if (flag_charge_rule_1 != true) {
		alert("请输入正确值");
	} else if (flag_charge_rule_2 != true) {
		alert("请输入正确值");

	} else if (flag_charge_rule_3 != true) {
		alert("请输入正确值");

	} else if (flag_charge_rule_4 != true) {
		alert("请输入正确值");

	} else if (flag_charge_rule_5 != true) {
		alert("请输入正确值");

	} else {
		alert("提交");
		$.post("chargerule/addrule.action", $("#addcharge_from").serialize(),
				function(data) {
					alert("新增成功");
					search();
				});

	}
}
$(function() {
	search();
});
function search() {
	$("#myShowbody").html("");
	var msg = $('#charge_from').serialize() + "&pageNum=" + "1";	
	
	$.post("chargerule/searchchargerule.action",msg,
			function(data) {
						var list = data.list;
						var tablebadyNode = document
								.getElementById("myShowbody");

						var tr = "";
						for (var i = 0; i < list.length; i++) {
							tr += "<tr>";
							tr += "<td>" + (i + 1) + "</td>";
							tr += "<td>" + list[i].charge_rule_1 + "</td>";
							tr += "<td>" + list[i].charge_rule_2 + "</td>";
							tr += "<td>" + list[i].charge_rule_3 + "</td>";
							tr += "<td>" + list[i].charge_rule_4 + "</td>";
							tr += "<td>" + list[i].charge_rule_5 + "</td>";
							tr += "<td>" + list[i].charge_status + "</td>";

							if (list[i].charge_status == '禁用') {
								tr += "<td><button class='btn btn-primary' value="
										+ i
										+ "  onclick='initiatemode(this);' >启用</button>";
								tr += "<button class='btn btn-primary' value="
										+ i
										+ " data-toggle='modal' data-target='#myModal2' onclick='setcharge_rule(this);' >修改</button>";
								tr += "<button class='btn btn-primary' value="
										+ i
										+ "  onclick='deletecharge(this);' >删除</button>";
							} else {
								
								tr += "<td><button class='btn btn-primary' value="
										+ i
										+ " data-toggle='modal' data-target='#myModal2' onclick='setcharge_rule(this);' >修改</button>";
							}

							tr += "<input type='hidden' class='hiddecharge_id'value='"
									+ list[i].charge_id + "'>";
							tr += "<input type='hidden' class='hiddecharge_rule_1'value='"
									+ list[i].charge_rule_1 + "'>";
							tr += "<input type='hidden' class='hiddecharge_rule_2'value='"
									+ list[i].charge_rule_2 + "'>";
							tr += "<input type='hidden' class='hiddecharge_rule_3'value='"
									+ list[i].charge_rule_3 + "'>";
							tr += "<input type='hidden' class='hiddecharge_rule_4'value='"
									+ list[i].charge_rule_4 + "'>";
							tr += "<input type='hidden' class='hiddecharge_status'value='"
									+ list[i].charge_status + "'>";
							tr += "<input type='hidden' class='hiddecharge_rule_5'value='"
									+ list[i].charge_rule_5 + "'><td>";
						}
						$("#myShowbody").append(tr);
						//记录分页信息
						document.getElementById("pages").innerHTML = data.pages;	//总页数
						document.getElementById("total").innerHTML = data.total;	//查询总数
						
						//初始化页数
						document.getElementById("pageNum").text = 1;	//重置页码
						document.getElementById("lastPage").style = "color: red";	//上一页置灰
						//下一页置灰
						var pages = document.getElementById("pages").innerHTML;
						if(pages == 1){
							document.getElementById("nextPage").style = "color: red";
						}else{
							document.getElementById("nextPage").style = "";
						}
					});
}

//下一页
function nextPage(){
	var pageNum = document.getElementById("pageNum").text;	//当前页数
	var nextpageNum = Number(pageNum) + 1;	//下一页页数
	
	var pages = document.getElementById("pages").innerHTML;	//总页数

	//页数判断
	if(nextpageNum > pages){
//		alert("已经是最后一页了");
	}else{
		$("#myShowbody").html("");
		var msg = $('#charge_from').serialize() + "&pageNum=" + nextpageNum;
		
		$.post("chargerule/searchchargerule.action",msg,

				function(data) {
					var list = data.list;
					var tablebadyNode = document.getElementById("myShowbody");

					var tr = "";
				
					for (var i = 0; i < list.length; i++) {
						tr += "<tr>";
						tr += "<td>" + (i + 1) + "</td>";
						tr += "<td>" + list[i].charge_rule_1 + "</td>";
						tr += "<td>" + list[i].charge_rule_2 + "</td>";
						tr += "<td>" + list[i].charge_rule_3 + "</td>";
						tr += "<td>" + list[i].charge_rule_4 + "</td>";
						tr += "<td>" + list[i].charge_rule_5 + "</td>";
						tr += "<td>" + list[i].charge_status + "</td>";

						if (list[i].charge_status == '禁用') {
							tr += "<td><button class='btn btn-primary' value="
									+ i
									+ "  onclick='initiatemode(this);' >启用</button>";
							tr += "<button class='btn btn-primary' value="
									+ i
									+ " data-toggle='modal' data-target='#myModal2' onclick='setcharge_rule(this);' >修改</button>";
							tr += "<button class='btn btn-primary' value="
									+ i
									+ "  onclick='deletecharge(this);' >删除</button>";
						} else {
							
							tr += "<td><button class='btn btn-primary' value="
									+ i
									+ " data-toggle='modal' data-target='#myModal2' onclick='setcharge_rule(this);' >修改</button>";
						}

						tr += "<input type='hidden' class='hiddecharge_id'value='"
								+ list[i].charge_id + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_1'value='"
								+ list[i].charge_rule_1 + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_2'value='"
								+ list[i].charge_rule_2 + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_3'value='"
								+ list[i].charge_rule_3 + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_4'value='"
								+ list[i].charge_rule_4 + "'>";
						tr += "<input type='hidden' class='hiddecharge_status'value='"
								+ list[i].charge_status + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_5'value='"
								+ list[i].charge_rule_5 + "'><td>";
					}
					$("#myShowbody").append(tr);
					
					//赋值新页数
					document.getElementById("pageNum").text = nextpageNum;
					
					//按钮操作（只改变颜色，不会禁用）
					if(nextpageNum == pages){	// 当前页数 = 总页数 时
						document.getElementById("nextPage").style = "color: red";
					}else{
						document.getElementById("nextPage").style = "";
					}
					
					document.getElementById("lastPage").style = ""; //恢复上一页颜色
					
		});
		
		
		
		
		
	}
}

//上一页
function lastPage(){
	var pageNum = document.getElementById("pageNum").text;	//当前页数
	var nextpageNum = Number(pageNum) - 1;	//下一页页数
	
	var pages = document.getElementById("pages").innerHTML;	//总页数

	//页数判断
	if(nextpageNum == 0){
//		alert("已经是最后一页了");
	}else{
		var msg = $('#charge_from').serialize() + "&pageNum=" + nextpageNum;
		
		$("#myShowbody").html("");
	
		
		$.post("chargerule/searchchargerule.action",msg,

				function(data) {
					var list = data.list;
					var tablebadyNode = document.getElementById("myShowbody");

					var tr = "";
				
					for (var i = 0; i < list.length; i++) {
						tr += "<tr>";
						tr += "<td>" + (i + 1) + "</td>";
						tr += "<td>" + list[i].charge_rule_1 + "</td>";
						tr += "<td>" + list[i].charge_rule_2 + "</td>";
						tr += "<td>" + list[i].charge_rule_3 + "</td>";
						tr += "<td>" + list[i].charge_rule_4 + "</td>";
						tr += "<td>" + list[i].charge_rule_5 + "</td>";
						tr += "<td>" + list[i].charge_status + "</td>";

						if (list[i].charge_status == '禁用') {
							tr += "<td><button class='btn btn-primary' value="
									+ i
									+ "  onclick='initiatemode(this);' >启用</button>";
							tr += "<button class='btn btn-primary' value="
									+ i
									+ " data-toggle='modal' data-target='#myModal2' onclick='setcharge_rule(this);' >修改</button>";
							tr += "<button class='btn btn-primary' value="
									+ i
									+ "  onclick='deletecharge(this);' >删除</button>";
						} else {
							
							tr += "<td><button class='btn btn-primary' value="
									+ i
									+ " data-toggle='modal' data-target='#myModal2' onclick='setcharge_rule(this);' >修改</button>";
						}

						tr += "<input type='hidden' class='hiddecharge_id'value='"
								+ list[i].charge_id + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_1'value='"
								+ list[i].charge_rule_1 + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_2'value='"
								+ list[i].charge_rule_2 + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_3'value='"
								+ list[i].charge_rule_3 + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_4'value='"
								+ list[i].charge_rule_4 + "'>";
						tr += "<input type='hidden' class='hiddecharge_status'value='"
								+ list[i].charge_status + "'>";
						tr += "<input type='hidden' class='hiddecharge_rule_5'value='"
								+ list[i].charge_rule_5 + "'><td>";
					}
					$("#myShowbody").append(tr);
					//赋值新页数
					document.getElementById("pageNum").text = nextpageNum;
					
					//按钮操作（只改变颜色，不会禁用）
					if(nextpageNum == 1){	// 当前页数 = 1 时
						document.getElementById("lastPage").style = "color: red";
					}else{
						document.getElementById("lastPage").style = "";
					}
					
					document.getElementById("nextPage").style = ""; //恢复下一页颜色
					
		});
	}
}

// 启用 或者禁用状态
function initiatemode(node) {

	var number = $(node).val();
	var charge_status = $("#myShowbody tr").eq(number).find(
			".hiddecharge_status").val();
	var charge_id = $("#myShowbody tr").eq(number).find(".hiddecharge_id")
			.val();
	if (charge_status == '启用') {
		var mymessage = confirm("请选择，是否禁用");
		if (mymessage == true) {
			$.post("chargerule/initiatemodechargerule.action", {

				charge_status : charge_status,
				charge_id : charge_id
			}, function(data) {

				search();
				alert("请选择一个套餐");
			});
		} else if (mymessage == false) {

		}
	} else {

		var mymessage = confirm("请选择，是否启用");
		if (mymessage == true) {
			$.post("chargerule/initiatemodechargerule.action", {

				charge_status : charge_status,
				charge_id : charge_id
			}, function(data) {
				// alert("删除" + currentcarparklicense + "完成");
				search();
			});
		} else if (mymessage == false) {

		}
	}

}
//设置在修改模态框里面原来的值
var inputcharge_rule_1=null;
var inputcharge_rule_2=null;
var inputcharge_rule_3=null;
var inputcharge_rule_4=null;
var inputcharge_rule_5=null;
var hiddecharge_id=null;
function setcharge_rule(node) {
	var number = $(node).val();

	 inputcharge_rule_1 = $("#myShowbody tr").eq(number).find(
			".hiddecharge_rule_1").val();
	 inputcharge_rule_2 = $("#myShowbody tr").eq(number).find(
			".hiddecharge_rule_2").val();
	 inputcharge_rule_3 = $("#myShowbody tr").eq(number).find(
			".hiddecharge_rule_3").val();
	 inputcharge_rule_4 = $("#myShowbody tr").eq(number).find(
			".hiddecharge_rule_4").val();
	 inputcharge_rule_5 = $("#myShowbody tr").eq(number).find(
			".hiddecharge_rule_5").val();
	 hiddecharge_id = $("#myShowbody tr").eq(number).find(
	 ".hiddecharge_id").val();
	$("#modifier_charge_rule_1").attr("value", inputcharge_rule_1);
	$("#modifier_charge_rule_2").attr("value", inputcharge_rule_2);
	$("#modifier_charge_rule_3").attr("value", inputcharge_rule_3);
	$("#modifier_charge_rule_4").attr("value", inputcharge_rule_4);
	$("#modifier_charge_rule_5").attr("value", inputcharge_rule_5);
}

function modifier_blur_charge_rule_1() {
	var modifier_charge_rule_1 = $("#modifier_charge_rule_1").val();
	if (modifier_charge_rule_1 == '') {

		$("#modifier_charge_rule_1_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(modifier_charge_rule_1)) {
		$("#modifier_charge_rule_1_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#modifier_charge_rule_1_msg").html("通过").css("color", "green");
		return true;
	}

}
function modifier_blur_charge_rule_2() {
	var modifier_charge_rule_2 = $("#modifier_charge_rule_2").val();
	if (modifier_charge_rule_2 == '') {

		$("#modifier_charge_rule_2_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(modifier_charge_rule_2)) {
		$("#modifier_charge_rule_2_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#modifier_charge_rule_2_msg").html("通过").css("color", "green");
		return true;
	}

}
function modifier_blur_charge_rule_3() {
	var modifier_charge_rule_3 = $("#modifier_charge_rule_3").val();
	if (modifier_charge_rule_3 == '') {

		$("#modifier_charge_rule_3_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(modifier_charge_rule_3)) {
		$("#modifier_charge_rule_3_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#modifier_charge_rule_3_msg").html("通过").css("color", "green");
		return true;
	}

}
function modifier_blur_charge_rule_4() {
	var modifier_charge_rule_4 = $("#modifier_charge_rule_4").val();
	if (modifier_charge_rule_4 == '') {

		$("#modifier_charge_rule_4_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(modifier_charge_rule_4)) {
		$("#modifier_charge_rule_4_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#modifier_charge_rule_4_msg").html("通过").css("color", "green");
		return true;
	}

}
function modifier_blur_charge_rule_5() {
	var modifier_charge_rule_5 = $("#modifier_charge_rule_5").val();
	if (modifier_charge_rule_5 == '') {

		$("#modifier_charge_rule_5_msg").html("不能为空").css("color", "red");
		return false;
	} else if (!numberzhengze.test(modifier_charge_rule_5)) {
		$("#modifier_charge_rule_5_msg").html("请输入正整数").css("color", "red");
		return false;
	} else {
		$("#modifier_charge_rule_5_msg").html("通过").css("color", "green");
		return true;
	}

}


function changemodifier() {
	var flag_modifier_charge_rule_1 =  modifier_blur_charge_rule_1();
	var flag_modifier_charge_rule_2 =  modifier_blur_charge_rule_2();
	var flag_modifier_charge_rule_3 =  modifier_blur_charge_rule_3();
	var flag_modifier_charge_rule_4 =  modifier_blur_charge_rule_4();
	var flag_modifier_charge_rule_5 =  modifier_blur_charge_rule_5();
	
 var charge_rule_1=	$("#modifier_charge_rule_1").val()
var charge_rule_2 =	$("#modifier_charge_rule_2").val()
var charge_rule_3=	$("#modifier_charge_rule_3").val()
var charge_rule_4=	$("#modifier_charge_rule_4").val()
var charge_rule_5=	$("#modifier_charge_rule_5").val()
	
	if (flag_modifier_charge_rule_1 != true) {
		alert("请输入正确值");
	} else if (flag_modifier_charge_rule_2 != true) {
		alert("请输入正确值");

	} else if (flag_modifier_charge_rule_3 != true) {
		alert("请输入正确值");

	} else if (flag_modifier_charge_rule_4 != true) {
		alert("请输入正确值");

	} else if (flag_modifier_charge_rule_5 != true) {
		alert("请输入正确值");

	}else if(inputcharge_rule_1==$("#modifier_charge_rule_1").val()&&
	 inputcharge_rule_2==$("#modifier_charge_rule_2").val()&&
	 inputcharge_rule_3==$("#modifier_charge_rule_3").val()&&
	 inputcharge_rule_4==$("#modifier_charge_rule_4").val()&&
	 inputcharge_rule_5==$("#modifier_charge_rule_5").val()) {
		alert("不要提交相同的值");
	}else {
		alert("提交");
		$.post("chargerule/changerule.action", {charge_id:hiddecharge_id,
			charge_rule_1:charge_rule_1,
			charge_rule_2:charge_rule_2,
			charge_rule_3:charge_rule_3,
			charge_rule_4:charge_rule_4,
			charge_rule_5:charge_rule_5
		},
				function(data) {
					alert("修改成功");
					search();
            
				});

	}
}

//删除
function deletecharge(node){
	var number = $(node).val();
	
	var charge_id = $("#myShowbody tr").eq(number).find(".hiddecharge_id")
			.val();
	
	var mymessage = confirm("请选择，是否删除");
	if (mymessage == true) {
		$.post("chargerule/deletechargerule.action", {
				charge_id : charge_id
		}, function(data) {

			search();
		
		});
	} else if (mymessage == false) {

	}
}