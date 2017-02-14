var oData={
	init:function(){
		oData.action()
	},
	action:function(){

		$("#reg-phone .p-Check").blur(function(){
			var val=$(".p-Check").val();
			var self=this
			$.get("lib/regi-Data.json/data.json",function(data){
				var dataLgh=data.length;
				for(var i=0;i<dataLgh;i++){
					if(val==data[i].num){
						$(self).removeClass("success")
						$('.cek-Show').html("手机号已注册，请")
						$(self).siblings('.cek-Show').show()
						var oA=$("<a href='https://passport.feiniu.com/gateway/login'>点此登录</a>")
						$('.cek-Show').append(oA)
					}
				}
			},'json')
		})
		
	}
}




$(function(){
	oData.init();
})