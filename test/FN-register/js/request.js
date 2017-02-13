var oData={
	init:function(){
		oData.action()
	},
	action:function(){
		$.get("lib/regi-Data.json/data.json",function(data){
			var dataLgh=data.length;
			for(var i=0;i<dataLgh;i++){
				console.log(data[i].num)
			}
		},'json')
	}
}




$(function(){
	oData.init();
})