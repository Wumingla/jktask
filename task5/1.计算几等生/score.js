var getslogan = document.getElementById("slogan")
// 拿到标语
function getresult() {
	// 点击按钮触发函数
	var score = prompt("请输入你的成绩：","90")
	// 弹出对话框，输入数字
		switch(true){
		// 确定输入成绩
			case score<=100&&score>=90:
			// 如果成绩在本区间内
			console.log(1);
			// 返回数值"1"到后台
			slogan.innerHTML="一等生，超级棒";
			// 修改标语
			alert("一等生，超级棒")
			// 弹出等级框
			break;
			// 结束
			case score<90&&score>=80:
			console.log(2);
			slogan.innerHTML="二等生，棒棒的";
			alert("二等生，棒棒的")
			break;
			case score<80&&score>=70:
			console.log(3);
			slogan.innerHTML="三等生，给力哦";
			alert("三等生，给力哦")
			break;
			case score<70&&score>=60:
			console.log(4);
			slogan.innerHTML="四等生，加油啊";
			alert("四等生，加油啊")
			break;
			case score<60&&score>=50:
			console.log(5);
			slogan.innerHTML="五等生，别顽皮";
			alert("五等生，别顽皮")
			break;
			case score<50&&score>=40:
			console.log(6);
			slogan.innerHTML="六等生，都不溜";
			alert("六等生，都不溜")
			break;
			case score<40&&score>=30:
			console.log(7);
			slogan.innerHTML="七等生，很给力哦";
			alert("七等生，很给力哦")
			break;
			case score<30&&score>=20:
			console.log(8);
			slogan.innerHTML="八等生，告你妈";
			alert("八等生，告你妈")
			break;
			case score<20&&score>=10:
			console.log(9);
			slogan.innerHTML="九等生，渣渣";
			alert("九等生，渣渣")
			break;
			case score<10&&score>0:
			console.log(10);
			slogan.innerHTML="十等生，劝退";
			alert("十等生，劝退")
			break;
			default:
			console.log(0);
			slogan.innerHTML="请正确输入成绩";
			alert("请正确输入成绩")
			// 不正确输入成绩时提示
		}
}
