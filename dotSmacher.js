var score=0;
var aWidth;
var aHeight;
var timer;
function detectHit(){
	score +=1;
	scoreLabel.innerHTML="Score: "+score;
}
function setGameAreaBounds(){
	if(document.all){
		aWidth=document.body.clientWidth;
		aHeight=document.body.clientHeight;
	}else{
		aWidth=innerWidth;
		aHeight=innerHeight;
	}
	aWidth-=30;
	aHeight-=95;
	document.getElementById("gameArea").style.width=aWidth;
	document.getElementById("gameArea").style.height=aHeight;
	aWidth-=74;
	aHeight-=74;
	moveDot();
	
	}
	function moveDot(){
	var x=Math.floor(Math.random()*aWidth);
	var y=Math.floor(Math.random()*aHeight);
	if(x<10)
		x=10;
	if(y<10)
		y=10;
	document.getElementById("dot").style.left=x;
	document.getElementById("dot").style.top=y;
	clearTimeout(timer);
	timer=setTimeout("moveDot()",750/*1000 = 1 sec*/);
	moveDot2();
	}
	function moveDot2(){
	var x=Math.floor(Math.random()*aWidth);
	var y=Math.floor(Math.random()*aHeight);
	if(x<10)
		x=10;
	if(y<10)
		y=10;
	document.getElementById("dot2").style.left=x;
	document.getElementById("dot2").style.top=y;
	clearTimeout(timer);
	timer=setTimeout("moveDot2()",750);
	moveDot3();
	}
	function moveDot3(){
	var x=Math.floor(Math.random()*aWidth);
	var y=Math.floor(Math.random()*aHeight);
	if(x<10)
		x=10;
	if(y<10)
		y=10;
	document.getElementById("dot3").style.left=x;
	document.getElementById("dot3").style.top=y;
	clearTimeout(timer);
	timer=setTimeout("moveDot3()",750);
	moveDot4();
	}
	function moveDot4(){
	var x=Math.floor(Math.random()*aWidth);
	var y=Math.floor(Math.random()*aHeight);
	if(x<10)
		x=10;
	if(y<10)
		y=10;
	document.getElementById("dot4").style.left=x;
	document.getElementById("dot4").style.top=y;
	clearTimeout(timer);
	timer=setTimeout("moveDot4()",750);
	moveDot5();
	}
	function moveDot5(){
	var x=Math.floor(Math.random()*aWidth);
	var y=Math.floor(Math.random()*aHeight);
	if(x<10)
		x=10;
	if(y<10)
		y=10;
	document.getElementById("dot5").style.left=x;
	document.getElementById("dot5").style.top=y;
	clearTimeout(timer);
	timer=setTimeout("moveDot5()",750);
	moveDot6();
	}
	function moveDot6(){
	var x=Math.floor(Math.random()*aWidth);
	var y=Math.floor(Math.random()*aHeight);
	if(x<10)
		x=10;
	if(y<10)
		y=10;
	document.getElementById("dot6").style.left=x;
	document.getElementById("dot6").style.top=y;
	clearTimeout(timer);
	timer=setTimeout("moveDot6()",750);
	moveDot();
	}
