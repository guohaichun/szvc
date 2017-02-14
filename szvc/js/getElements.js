	//获取类名的兼容函数
	function getClass(classname,father){
			//默认document，如果不传father。
			father=father||document;
			//首先判断浏览器 是现代浏览器还是ie浏览器 用方法document.getElementsByClassName
			if(father.getElementsByClassName){
				//现代浏览器，用该方法返回
				return father.getElementsByClassName(classname);
			}else{
				//ie浏览器，首先获取所有的标签
				var all=father.getElementsByTagName("*");
				//创建一个新数组，把选择出来的标签放进去
				var newarr=[];
				//需要遍历   获取的所有标签
				for(var i=0;i<all.length;i++){
					//如果第i个标签的类名与所传类名classname相同
					if(checkRep(classname,all[i].className)){
						//用newarr.push获取的标签传入新数组。
						newarr.push(all[i]);
					}
				}
				//需要返回  新数组
				return newarr;
			}
	}
		//检查重复   val是传入的类名  str是要检查重复的类名字符串
	function checkRep(val,str){
		//用字符串的转换方法 str.split（“ ”）用空格将字符串分隔为数组  存放在数组对象arr中
		var arr=str.split(" ");
		//遍历数组arr
		for(var i in arr){
			//如果数组中的元素与所传类名相同  则返回true
			if(arr[i]==val){
				return true;
			}
		}
		//遍历一遍后，没有相同，则返回false
		return false;
	}

	//获取元素的兼容函数（可以支持标签，id，class...）
	function getElements(selector,father){
		father=father||document;
		if(typeof selector=="string"){
			selector=selector.replace(/^\s*|\s*getElements/g,"")//正则  去除字符串前后的空格
			if(selector.charAt(0)=="."){   //class
				return getClass(selector.slice(1),father);
			}else if(selector.charAt(0)=="#"){
				return document.getElementById(selector.slice(1));
			}else if(/^[a-z][1-6a-z]*/g.test(selector)){
					return father.getElementsByTagName(selector)
			}
		}
		else if(typeof selector=="function"){
			window.onload=function(){
				selector();
			}
			/*addEvent(window,"load",function(){selector();})*/
		}
	}
	//解决绑定多个事件的兼容函数
	function addEvent(obj,event,fun){
		obj[fun]=function(){
			fun.call(obj)
		}
		if(obj.attachEvent){
			obj.attachEvent("on"+event,fun);
		}else{
			obj.addEventListener(event,fun,false)
		}
	}
	//移除事件的兼容函数
	function removeEvent(obj,event,fun){
		obj[fun]=function(){
			fun.call(obj)
		}
		if(obj.detachEvent){
			obj.detachEvent("on"+event,fun)
		}else{
			obj.removeEventListener(event,fun,false)
		}
	}

	//鼠标滚轮事件
	function mouseWheel(obj,up,down){
		if(obj.attachEvent){
			obj.attachEvent("onmouseWheel",scrollFn);	//IE,opera
		}else if(obj.addEventListener){			
			obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari,-webkit-
			obj.addEventListener("DOMMouseScroll",scrollFn,false);//firefox	 -moz-
		}
		function scrollFn(e){
			e=e||window.event;
			var f=e.detail||e.wheelDelta;
			if(f==-3||f==120){
				if(up){
					up();
				}
			}
			if(f==3||f==-120){
				if(down){
					down();
				}
				
			}
		}
	}

	//hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
	

