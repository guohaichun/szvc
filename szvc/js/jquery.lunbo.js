jQuery.extend({
	lunbo:function(obj,time){
		var num=0;
		$(obj).hide().eq(0).show();
		function lunbomove(){
			num++;
			if(num>=$(obj).length){
				num=0;
			}
			$(obj).fadeOut().eq(num).fadeIn();
		}
		var lunbot=setInterval(lunbomove,time);
	}
})