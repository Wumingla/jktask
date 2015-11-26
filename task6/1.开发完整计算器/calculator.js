// 方法一：HTML事件处理程序，缺点：HTML代码和JS代码混在一起，修改时候HTML和JS代码都需要进行修改。
var objscreen = document.getElementById("screen");
// 定义变量
function getNum (num) {
	objscreen.value+=num;
}//添加数字
function getresult(){
	objscreen.value = eval(objscreen.value);
}//数值运算
function sin(){
	objscreen.value = Math.sin(objscreen.value*Math.PI/180.0);
}//正弦运算
function cos(){
	objscreen.value = Math.cos(objscreen.value*Math.PI/180.0);
}//余弦运行
function tan(){
	objscreen.value = Math.tan(objscreen.value*Math.PI/180.0);
}//正切运算
function sqrt(){
	objscreen.value = Math.sqrt(objscreen.value);
}//平方根运算









// // 方法二：DOMO级事件处理程序，缺点，只能使用一次，第二次会覆盖第一次的事件。优点，使用这种方法，可以把html中input里的onclick属性及其JS值去掉，做到HTML和JS分离

// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
// var btn4 = document.getElementById("btn4");
// var btn5 = document.getElementById("btn5");
// var btn6 = document.getElementById("btn6");
// var btn7 = document.getElementById("btn7");
// var btn8 = document.getElementById("btn8");
// var btn9 = document.getElementById("btn9");
// var btn0 = document.getElementById("btn0");
// var btnx = document.getElementById("btnx");
// var btnj = document.getElementById("btnj");
// var btna = document.getElementById("btna");
// var btns = document.getElementById("btns");
// var btnd = document.getElementById("btnd");
// var btnsin = document.getElementById("btnsin");
// var btncos = document.getElementById("btncos");
// var btntan = document.getElementById("btntan");
// var btnr = document.getElementById("btnr");
// var btnresult = document.getElementById("btnresult");
// var objscreen = document.getElementById("screen");
// // 定义变量
// var getNum = function getNum () {
// 	objscreen.value+=this.value;
// }
// var tri = function tri() {
// 	objscreen.value = Math[this.value](objscreen.value*Math.PI/180.0);
// }
// var sqrt = function sqrt() {
// 	objscreen.value = Math.sqrt(objscreen.value)
// }
// var getresult = function getresult(){
// 	objscreen.value = eval(objscreen.value);
// }
// // 定义函数
// btn1.onclick = getNum;
// btn2.onclick = getNum;
// btn3.onclick = getNum;
// btn4.onclick = getNum;
// btn5.onclick = getNum;
// btn6.onclick = getNum;
// btn7.onclick = getNum;
// btn8.onclick = getNum;
// btn9.onclick = getNum;
// btn0.onclick = getNum;
// btna.onclick = getNum;
// btnj.onclick = getNum;
// btnx.onclick = getNum;
// btns.onclick = getNum;
// btnd.onclick = getNum;
// btnsin.onclick = tri;
// btncos.onclick = tri;
// btntan.onclick = tri;
// btnr.onclick = sqrt;
// btnresult.onclick = getresult;
// // 定义事件







// // 方法三：DOM2级事件处理程序。注意：使此方法前请将HTML文件中INPUT里的ONCLICK全部清除。

// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
// var btn4 = document.getElementById("btn4");
// var btn5 = document.getElementById("btn5");
// var btn6 = document.getElementById("btn6");
// var btn7 = document.getElementById("btn7");
// var btn8 = document.getElementById("btn8");
// var btn9 = document.getElementById("btn9");
// var btn0 = document.getElementById("btn0");
// var btnx = document.getElementById("btnx");
// var btnj = document.getElementById("btnj");
// var btna = document.getElementById("btna");
// var btns = document.getElementById("btns");
// var btnd = document.getElementById("btnd");
// var btnsin = document.getElementById("btnsin");
// var btncos = document.getElementById("btncos");
// var btntan = document.getElementById("btntan");
// var btnr = document.getElementById("btnr");
// var btnresult = document.getElementById("btnresult");
// var objscreen = document.getElementById("screen");
// // 定义变量
// var getNum = function getNum () {
// 	objscreen.value+=this.value;
// }
// var tri = function tri() {
// 	objscreen.value = Math[this.value](objscreen.value*Math.PI/180.0);
// }
// var sqrt = function sqrt() {
// 	objscreen.value = Math.sqrt(objscreen.value)
// }
// var getresult = function getresult(){
// 	objscreen.value = eval(objscreen.value);
// }
// // 定义函数
// var eventUtil ={
// 	addHandler:function(element,type,handler){
// 		if (element.addEventListener) {
// 			element.addEventListener(type,handler,false);
// 		}else{
// 			element['on'+type]=handler;
// 		}
// 	}
// }
// // 选择浏览器
// eventUtil.addHandler(btn1,'click',getNum);
// eventUtil.addHandler(btn2,'click',getNum);
// eventUtil.addHandler(btn3,'click',getNum);
// eventUtil.addHandler(btn4,'click',getNum);
// eventUtil.addHandler(btn5,'click',getNum);
// eventUtil.addHandler(btn6,'click',getNum);
// eventUtil.addHandler(btn7,'click',getNum);
// eventUtil.addHandler(btn8,'click',getNum);
// eventUtil.addHandler(btn9,'click',getNum);
// eventUtil.addHandler(btn0,'click',getNum);
// eventUtil.addHandler(btnx,'click',getNum);
// eventUtil.addHandler(btnj,'click',getNum);
// eventUtil.addHandler(btna,'click',getNum);
// eventUtil.addHandler(btns,'click',getNum);
// eventUtil.addHandler(btnd,'click',getNum);
// eventUtil.addHandler(btnsin,'click',tri);
// eventUtil.addHandler(btncos,'click',tri);
// eventUtil.addHandler(btntan,'click',tri);
// eventUtil.addHandler(btnr,'click',sqrt);
// eventUtil.addHandler(btnresult,'click',getresult);