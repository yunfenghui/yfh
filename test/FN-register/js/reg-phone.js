var obj={
	init:function(){
		obj.switch();
		obj.checkReg();
	},
	switch:function(){
		$("#tabs .btn-phone").click(function(){
		location.href="reg-phone.html"//跳转phone的注册页面
		})
		$("#tabs .btn-email").click(function(){
		location.href="reg-email.html" //跳转email的注册页面
		})
		$(".change .btn").click(function(){
			var img0=$("#Img")[0].src; //获取img的src值
			$("#Img").attr('src',"https://reg.feiniu.com/patcha/image?t=1486612183195"); //给img的src赋值	
		})
	},
	checkReg:function(){
		$("#reg-phone .p-Check").blur(function(){
			var reg = /^1[3,5,7,8,9]\d{9}$/;//建立正则表达式验证表单格式
			var val=$(".p-Check").val();
			if(val==""){
				$(this).siblings('.cek-Show').show()
				$(this).css({'border-color':'#C70034'})
			}
			//利用正则表达式判断是否符合
			if(reg.test(val)){
				$(this).addClass("success")//当格式正确时给予正确图标
				$("#reg-phone .code-btn").css("color","#3c3c3c")
			}
			if(reg.test(val)==false&&val!=""){
				$(this).css({'border-color':'#C70034'})
				$('.cek-Show').html("手机号码格式不正确，请重新输入")
				$(this).siblings('.cek-Show').show()
			}
		})

		$("#reg-phone .p-Check").focus(function(){
			$(this).removeClass("success")//删除掉（class）去掉正确图案
			$(this).siblings('.cek-Show').hide()
			$(this).css({'border-color':'#ccc'})
			$('.cek-Show').html("手机号码不能为空")
		})

		$("#reg-phone .imgCode").blur(function(){
			
			var val=$(".imgCode").val();
			if(val==""){
				$(this).siblings('.imgCode-txt').show()
				$(this).css({'border-color':'#C70034'})
			}
		})

		$("#reg-phone .imgCode").focus(function(){
			$(this).siblings('.imgCode-txt').hide()
			$(this).css({'border-color':'#ccc'})
		})

		$("#reg-phone .pwd").blur(function(){
			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;//必须函数字和字母 数字和字母都要有 且6-20位
			var val=$(".pwd").val();
			var valLen=val.length;//获取input的字符串长度
			if(val==""){
				$(this).siblings('.pwd-txt').show()
				$(this).css({'border-color':'#C70034'})
			}
			if(reg.test(val)){
				$(this).addClass("success")
			}
			//字符串小于6且不为空时提示
			if(valLen<=5&&val!=""){
				$('.pwd-txt').html("密码长度只能在6-16位字符之间")
				$(this).siblings('.pwd-txt').show()
			}
			
		})

		$("#reg-phone .pwd").focus(function(){
			$(this).siblings('.pwd-txt').hide()
			$(this).css({'border-color':'#ccc'})
			$(this).removeClass("success")
			$('.pwd-txt').html("密码不能为空")
		})
	}
}



$(function(){
	obj.init();
})