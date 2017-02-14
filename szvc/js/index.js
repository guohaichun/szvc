$(function(){
	$.lunbo(".banner>img",2000);
	$.menu(".botcon3_ul",".botcon3");
	$.menu(".botcon2_ul",".botcon2");
	$.menu(".botcon1_ul",".botcon1");
	$(".syboxmenu").hide();
	$(".sybox").each(function(i){
		$(this).hover(function(){
			$(".syboxmenu").eq(i).show();
		},function(){
			$(".syboxmenu").eq(i).hide();
		})
	})
	/*******************************/
	function horsemove(){
		var first=$(".scrollfore").eq(0);
		$(first).animate({width:0,margin:0},1000,function(){
			first.appendTo(".scrollbox");
			first.width(130);
			first.css({"margin-left":"10px","margin-right":"10px"})
		})
	}
	var horset=setInterval(horsemove,1000);
	$(".scroll").mouseover(function(){
		clearInterval(horset)
	})
	$(".scroll").mouseout(function(){
		horset=setInterval(horsemove,1000)
	})
	$(".scrollarrR").click(function(){
		horsemove();
	})
	$(".scrollarrL").click(function(){
		var last=$(".scrollfore:last-child");
		$(last).animate({width:0,margin:0},1000,function(){
			last.insertBefore($(".scrollfore").eq(1));
			last.width(130);
			last.css({"margin-left":"10px","margin-right":"10px"})
		})
		
	})
	/*********************************/
	var linkt=setInterval(linkmove,500);
	$(".linkimg").mouseover(function(){
		clearInterval(linkt)
	})
	$(".linkimg").mouseout(function(){
		linkt=setInterval(linkmove,500);
	})
	function linkmove(){
		var first=$(".linkimga").eq(0);
		first.animate({height:0,"margin-bottom":0,"border-top":0,"border-bottom":0},500,
			function(){
				first.appendTo(".linkimg");
				first.height(45);
				first.css({"margin-bottom":"10px","border-top":"1px solid #e3e3e3","border-bottom":"1px solid #e3e3e3"})
			});
		
	}

})