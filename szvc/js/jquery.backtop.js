jQuery.extend({
	backTop:function(obj,time,height){
		$(window).on("scroll",function(){
			var tops=$(window).scrollTop();
			if(tops>=height){
				$(obj).fadeIn(600);
			}else{
				$(obj).fadeOut(600);
			}
		})
		$(".btn").click(function(){
			var newobj={st:$(window).scrollTop()}
			$(newobj).animate({st:0},{
				duration:time,
				step:function(){
					$(window).scrollTop(newobj.st)
				}
			})
		})
	}
})