function getNum (num) {
// 输入数值的函数
	var objscreen = document.getElementById("screen");
	// 拿到屏幕ID
	objscreen.value+=num;
	// 把屏幕数值与输入数值赋予给屏幕数值
}

function getresult(){
// 运算的函数
	var objscreen = document.getElementById("screen");
	// 拿到屏幕ID
	objscreen.value = eval(objscreen.value);
	// 屏幕数值等于屏幕数值的运算结果
}