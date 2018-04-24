//全局变量
var canvas;//父画布全局变量
var rect;//道闸底座
var rect2;//道闸横臂
$(function() {//此处方法为全部加载完成，能保证全部ID、标签等都能找到
	canvas = new fabric.Canvas("myCanvas");
	carSensor1();
	drawRoadgate();
	getCurDate();
	setInterval("getCurDate()", 100);//控制页面时间跳动
})

//绘制道闸
function drawRoadgate(){
	// create a rectangle object
	rect = new fabric.Rect({
	  left: 50,
	  top: 200,
	  fill: 'yellow',
	  width: 100,
	  height: 200,
	  hasControls :false,//禁止改变控件大小
	  lockMovementX : true,//锁定X轴
	  lockMovementY : true,//锁定Y轴
	});
	rect2 = new fabric.Rect({
		  left: 100,
		  top: 250,
		  fill: 'red',
		  width: 450,
		  height: 30,
		  hasControls :false,//禁止改变控件大小
		  lockMovementX : true,//锁定X轴
		  lockMovementY : true,//锁定Y轴
		});
	//添加到画布上
	canvas.add(rect);
	canvas.add(rect2);
}

//道闸动画
function roadgateAnimate(op){
	var angle = 0;
	if(op == 'open'){
		angle = -90;
	}else{
		angle = 0;
	}
	rect2.animate('angle', angle, {
		  onChange: canvas.renderAll.bind(canvas),
		  duration: 1000,//动画持续时间
		  easing: fabric.util.ease.around
	});//延时动画
}

function clickBtn2() {
	var carLisence = $(" input[ name='carLisence' ] ").val();
	alert("获取到的车牌:" + carLisence);
	$.ajax({
		url : "park/entranceDisplay.action",
		type : "POST",
		data : {
			"carLisence" : carLisence
		},
		success : function(res) {
			$(" font[ id='displayboard' ] ").text("欢迎!" + res.car_park_license + "的车主");
			roadgateAnimate('open');
		}
	});
}

//触发传感器1
function carSensor1() {
	$.ajax({
		url : "park/entranceDisplaySearch.action",
		type : "POST",
		success : function(res) {
			$(" font[ id='displayboard' ] ").text("欢迎光临!当前空余车位:" + res);
		}
	});
}
//触发传感器2
function carSensor2() {
	roadgateAnimate('close');
	carSensor1();
}

//最终测试成功的上传车牌文件ajax方法
function doUpload() {  
    var formData = new FormData($( "#uploadForm" )[0]);  
    $.ajax({  
         url: 'park/upload.action',  
         type: 'POST',  
         data: formData,  
         async: false,  
         cache: false,  
         contentType: false,  
         processData: false,  
         success: function (returndata) {  
             alert("成功" + returndata.car_park_license); 
             $(" font[ id='displayboard' ] ").text("欢迎!" + returndata.car_park_license + "的车主");
             roadgateAnimate('open');
         },  
         error: function (returndata) {  
             alert("提交车辆照片失败");  
         }  
    });  
} 



// -------------------LED显示效果JS开始 -------------------//
function getCurDate(){
	var d = new Date();
	var week;
	switch (d.getDay()) {
	case 1:
		week = "星期一";
		break;
	case 2:
		week = "星期二";
		break;
	case 3:
		week = "星期三";
		break;
	case 4:
		week = "星期四";
		break;
	case 5:
		week = "星期五";
		break;
	case 6:
		week = "星期六";
		break;
	default:
		week = "星期天";
	}
	var years = d.getFullYear();
	var month = add_zero(d.getMonth() + 1);
	var days = add_zero(d.getDate());
	var hours = add_zero(d.getHours());
	var minutes = add_zero(d.getMinutes());
	var seconds = add_zero(d.getSeconds());
	var ndate = years + "年" + month + "月" + days + "日 " + hours + ":" + minutes
			+ ":" + seconds + " " + week;
	var divT = document.getElementById("systimeshow");
	divT.innerHTML = ndate;
}

function add_zero(temp) {
	if (temp < 10)
		return "0" + temp;
	else
		return temp;
}

//-------------------LED显示效果JS结束 -------------------//