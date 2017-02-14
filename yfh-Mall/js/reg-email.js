var obj={
	init:function(){
		obj.switch();
		obj.checkReg();
	},
	switch:function(){
		$("#tabs .btn-email").click(function(){
		location.href="reg-email.html"//跳转email的注册页面
		})
		$("#tabs .btn-email").click(function(){
		location.href="reg-email.html" //跳转email的注册页面
		})
		$(".change .btn").click(function(){
			var img0=$("#Img")[0].src; //获取img的src值
			$("#Img").attr('src',"https://reg.feiniu.com/patcha/image?t=1486612183195"); 
		})
	},
	checkReg:function(){
		//邮箱验证失去焦点事件
		$("#reg-email .e-Check").blur(function(){
			var reg = /\w+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;//建立正则表达式验证表单格式(邮箱)
			var val=$(".e-Check").val();
			if(val==""){
				$(this).siblings('.e-txt').show();
				$(this).css({'border-color':'#C70034'});
			}
			//利用正则表达式判断是否符合reg.test()
			if(reg.test(val)){
				$(this).addClass("success");//当格式正确时给予正确图标
			}
			if(reg.test(val)==false&&val!=""){
				$(this).css({'border-color':'#C70034'});
				$('.e-txt').html("邮箱格式不正确，请重新输入");
				$(this).siblings('.e-txt').show();
			}
		})
		//邮箱验证聚焦事件
		$("#reg-email .e-Check").focus(function(){
			$(this).removeClass("success");//删除掉（class）去掉正确图案
			$(this).siblings('.e-txt').hide();
			$(this).css({'border-color':'#ccc'});
			$('.e-txt').html("邮箱不能为空");
		})
		//手机号码验证失去焦点事件
		$("#reg-email .p-Check").blur(function(){
			var reg = /^1[3,5,7,8,9]\d{9}$/;//建立正则表达式验证表单格式(手机号)
			var val=$(".p-Check").val();
			if(val==""){
				$(this).siblings('.cek-Show').show();
				$(this).css({'border-color':'#C70034'});
			}
			//利用正则表达式判断是否符合
			if(reg.test(val)){
				$(this).addClass("success");//当格式正确时给予正确图标
				$("#reg-email .code-btn").css("color","#3c3c3c");
			}
			if(reg.test(val)==false&&val!=""){
				$(this).css({'border-color':'#C70034'});
				$('.cek-Show').html("手机号码格式不正确，请重新输入");
				$(this).siblings('.cek-Show').show();
			}
		})
		//手机号码验证聚焦事件
		$("#reg-email .p-Check").focus(function(){
			$(this).removeClass("success");//删除掉（class）去掉正确图案
			$(this).siblings('.cek-Show').hide();
			$(this).css({'border-color':'#ccc'});
			$('.cek-Show').html("手机号码不能为空");
		})
		//图形验证码失去焦点验证
		$("#reg-email .imgCode").blur(function(){
			
			var val=$(".imgCode").val();
			if(val==""){
				$(this).siblings('.imgCode-txt').show();
				$(this).css({'border-color':'#C70034'});
			}
		})
		//图形验证码聚焦事件
		$("#reg-email .imgCode").focus(function(){
			$(this).siblings('.imgCode-txt').hide();
			$(this).css({'border-color':'#ccc'});
		})
		//设置密码验证失去焦点事件
		$("#reg-email .pwd").blur(function(){
			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;//必须函数字和字母 数字和字母都要有 且6-20位（用户密码）
			var val=$(".pwd").val();
			var reg2=/^[0-9]{6,20}$/;
			var reg3=/^[a-zA-Z]{6,20}$/;
			var valLen=val.length;
			if(val==""){
				$(this).siblings('.pwd-txt').show();
				$(this).css({'border-color':'#C70034'});
			}
			if(reg.test(val)){
				$(this).addClass("success");
				$(this).siblings('.pwd-txt').hide();
			}
			if(valLen<=5&&val!=""){
				$('.pwd-txt').html("密码长度只能在6-16位字符之间");
				$(this).siblings('.pwd-txt').show();
				$('.pwd-txt').css({'background':'#ffebeb'});
			}
			if(reg2.test(val)||reg3.test(val)){
				$('.pwd-txt').html('密码过于简单，建议由字母、数字和符号两种以上的组合');
				$(this).siblings('.pwd-txt').show();
				$('.pwd-txt').css({'background':'#ffebeb'});
			}	
		})
		//设置密码验证聚焦事件
		$("#reg-email .pwd").focus(function(){
			$(this).siblings('.pwd-txt').hide();
			$(this).css({'border-color':'#ccc'});
			$(this).removeClass("success");
			$('.pwd-txt').html("密码不能为空");
		})
		//确认密码失去焦点事件
		$('#reg-email .confirm-Pwd').blur(function(){
			var setPwdval=$('#reg-email .pwd').val();
			var confirmPwdval=$('#reg-email .confirm-Pwd').val();
			if(confirmPwdval==""){
				$(this).siblings('.confirm-Pwd').show();
			}
			if(confirmPwdval!=setPwdval){
				$(this).siblings('.confirm-txt').html('两次输入的密码不相同')
				$(this).siblings('.confirm-txt').show();
				$(this).css({'border-color':'#C70034'});
			}
			if(confirmPwdval==setPwdval&&confirmPwdval!=""){
				$(this).addClass("success");
				$(this).siblings('.confirm-txt').hide();
			}
		})
		//确认密码聚焦事件
		$('#reg-email .confirm-Pwd').focus(function(){
			$(this).removeClass("success");
			$(this).siblings('.confirm-txt').hide();
			$(this).css({'border-color':'#ccc'});
		})
		//密码设置的键盘按下事件
		$("#reg-email .pwd").keyup(function(){
			var val=$('.pwd').val();
			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,20}$/;
			var reg2=/^[0-9]{5,20}$/;
			var reg3=/^[a-zA-Z]{5,20}$/;
			var valLen=val.length;
			$('.pwd-txt').html("6-16位字符，建议由字母、数字和符号两种以上组合");
			$('.pwd-txt').css({'background':'#fff8e1'},{'width':"280"});
			$(this).siblings('.pwd-txt').show();
			$("#reg-email .low").css({'background':'#d5d5d5'});
			$("#reg-email .mid").css({'background':'#d5d5d5'});
			$("#reg-email .hig").css({'background':'#d5d5d5'});
			if(reg2.test(val)||reg3.test(val)&&valLen>5){
				$("#reg-email .low").css({'background':'#DA3A4C'});
			}
			if(valLen<6){
				$("#reg-email .low").css({'background':'#d5d5d5'});
			}
			if(reg.test(val)&&valLen>5){
				$("#reg-email .low").css({'background':'#DA3A4C'});
			}
			if(reg.test(val)&&valLen>8){
				$("#reg-email .low").css({'background':'#DA3A4C'});
				$("#reg-email .mid").css({'background':'#DA3A4C'});
			}
			if(reg.test(val)&&valLen>10){
				$("#reg-email .low").css({'background':'#DA3A4C'});
				$("#reg-email .mid").css({'background':'#DA3A4C'});
				$("#reg-email .hig").css({'background':'#DA3A4C'});
			}
		})
		//是否已阅读且同意注册
		$('#reg-email .agreeBtn').click(function(){	
			//判断复选框是否被选中if($("#id").is(":checked")){}
			if($('#reg-email .agreeReg').is(":checked")){
				console.log(123)
			}
		})
	}
}



$(function(){
	obj.init();
})