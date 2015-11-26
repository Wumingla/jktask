var b0 = document.getElementById("b0");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var ss =localStorage.getItem("e0");
var vv =localStorage.getItem("e1");
var rr =localStorage.getItem("e2");
// 获取对象
function a0() {
	document.bgColor="#DDF6F2";
	c0.style.backgroundColor="#2D484D";
	c1.style.backgroundColor="#F2EADD";
	c1.style.borderTopColor="#2D484D";
	c2.style.borderColor="#2D484D"
	c3.style.color="#2D484D";
	c4.style.color="#2D484D";
	c5.style.color="#2D484D";
	c6.style.color="#2D484D";
	c7.style.color="#2D484D";
	localStorage.setItem("e0","#2D484D");
	localStorage.setItem("e1","#DDF6F2");
	localStorage.setItem("e2","#F2EADD");
}
// 主题一
function a1() {
	document.bgColor="#F2EADD";
	c0.style.backgroundColor="#9966CC";
	c1.style.backgroundColor="#DDF6F2";
	c1.style.borderTopColor="#9966CC";
	c2.style.borderColor="#9966CC";
	c3.style.color="#9966CC";
	c4.style.color="#9966CC";
	c5.style.color="#9966CC";
	c6.style.color="#9966CC";
	c7.style.color="#9966CC";
	localStorage.setItem("e0","#9966CC");
	localStorage.setItem("e1","#F2EADD");
	localStorage.setItem("e2","#DDF6F2");
}
// 主题二
function a2() {
	document.bgColor="#FDFFFA";
	c0.style.backgroundColor="#34a637";
	c1.style.backgroundColor="#fff";
	c1.style.borderTopColor="#34a637";
	c2.style.borderColor="#34a637"
	c3.style.color="#34a637";
	c4.style.color="#34a637";
	c5.style.color="#34a637";
	c6.style.color="#34a637";
	c7.style.color="#34a637";
	localStorage.setItem("e0","#34a637");
	localStorage.setItem("e1","#FDFFFA");
	localStorage.setItem("e2","#fff");
}
// 主题三
function a3() {
	document.bgColor="#DCE7E9";
	c0.style.backgroundColor="#FF7A8A";
	c1.style.backgroundColor="#CBE2F0";
	c1.style.borderTopColor="#FF7A8A";
	c2.style.borderColor="#FF7A8A";
	c3.style.color="#FF7A8A";
	c4.style.color="#FF7A8A";
	c5.style.color="#FF7A8A";
	c6.style.color="#FF7A8A";
	c7.style.color="#FF7A8A";
	localStorage.setItem("e0","#FF7A8A");
	localStorage.setItem("e1","#DCE7E9");
	localStorage.setItem("e2","#CBE2F0");
}
// 主题四
function a4() {
	document.bgColor="#CBE2F0";
	c0.style.backgroundColor="#5F666E";
	c1.style.backgroundColor="#DCE7E9";
	c1.style.borderTopColor="#5F666E";
	c2.style.borderColor="#5F666E";
	c3.style.color="#5F666E";
	c4.style.color="#5F666E";
	c5.style.color="#5F666E";
	c6.style.color="#5F666E";
	c7.style.color="#5F666E";
	localStorage.setItem("e0","#5F666E");
	localStorage.setItem("e1","#CBE2F0");
	localStorage.setItem("e2","#DCE7E9");
}
// 主题五

for (var i = 0; i < localStorage.length; i++) {
	if (localStorage.key(i)=="e0") {
	document.bgColor=vv;
	c0.style.backgroundColor=ss;
	c1.style.backgroundColor=rr;
	c1.style.borderTopColor=ss;
	c2.style.borderColor=ss;
	c3.style.color=ss;
	c4.style.color=ss;
	c5.style.color=ss;
	c6.style.color=ss;
	c7.style.color=ss;
	}
};
// 绑定主题颜色

b0.onclick=a0;
b1.onclick=a1;
b2.onclick=a2;
b3.onclick=a3;
b4.onclick=a4;
// 绑定事件






