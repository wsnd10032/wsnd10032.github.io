var txt=document.querySelector('input');
			document.addEventListener('keyup',function(e){
				if(e.keyCode==83){
					txt.focus();
				}
			})

var txt=document.getElementById('txt');
txt.onfocus =function(){
	if (this.placeholder=='请搜索内容...'){
		this.placeholder='';
	}
}
txt.onblur=function(){
	if(this.placeholder==''){
		this.placeholder='请搜索内容...';
	}
}

var nav_list = document.querySelector('.nav_list');
var lis = nav_list.querySelectorAll('li');
var items=document.querySelectorAll('.item');
for(var i=0;i<lis.length;i++){
	lis[i].setAttribute('index',i);
	lis[i].onclick = function(){
		for(var i=0;i<lis.length;i++){
			lis[i].className='';
		}
		this.className='current';
		var index=this.getAttribute('index');
		for(var i=0;i<items.length;i++){
			items[i].style.display='none';
		}
		items[index].style.display='block';
	}
}

var box=document.querySelector('.box');
var mask=document.querySelector('.mask');
var big=document.querySelector('.big');
var bigImg=document.querySelector('.bigImg');
box.addEventListener('mouseover',function(){
	mask.style.display='block';
	big.style.display='block';
})
box.addEventListener('mouseout',function(){
	mask.style.display='none';
	big.style.display='none';
})
box.addEventListener('mousemove',function(e){
	var maskX=e.pageX-box.offsetLeft-mask.offsetWidth/2;
	var maskY=e.pageY-box.offsetTop-mask.offsetWidth/2;
	var maskMax=box.offsetWidth-mask.offsetWidth;
	if(maskX<0){
		maskX=0;
	}else if(maskX>maskMax){
		maskX=maskMax;
	}
	if(maskY<0){
		maskY=0;
	}else if(maskY>maskMax){
		maskY=maskMax;
	}
	mask.style.left=maskX+'px';
	mask.style.top=maskY+'px';
	var bigMax=bigImg.offsetWidth-big.offsetWidth;
	var bigX=maskX*bigMax/maskMax;
	var bigY=maskY*bigMax/maskMax;
	bigImg.style.left=-bigX+'px';
	bigImg.style.top=-bigY+'px';
})