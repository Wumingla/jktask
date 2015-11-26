// 方法一：
// 方法一首先将数列排序，然后首项与相邻的一项配对，如果相同配对成功，就一直配对，一直配对成功的最大值对应的元素为众数


function modeNum(){

	var arr2 = document.getElementById("arrinput").value.split(",");
	// 用于排序
	var	arr = document.getElementById("arrinput").value.split(",").sort();
	// 获取到输入框的元素,将元素转化为数组并由小到大排列
	var samenum=1;
	//定义临时变量：相同元素的数量
	var maxsame=0;
	//定义临时变量：当前最大的相同元素数量
	var maxmode=0;
	//定义临时变量：当前最大的相同元素数量对应的元素


		for(i=0;i<=arr.length-1;i++){	
		// 循环次数为数组元素的数量
			if (arr[i]==arr[i+1]){
			// 如果第一项与相邻的第二项相同的话
				samenum++;
				// 其相同数量的值加一
			}
			//一直累加
			else{
			// 当累计完毕的时候
				if(samenum>maxsame){
				// 如果累计到的数量大于当前累计最大值的时候
					maxsame=samenum;
					// 把当前值赋予给最大值
					maxmode=arr[i];
					// 这个最大值对应的元素为最多
				}
				samenum=1;
			    // 为下一轮的新元素初始相同数量的值为元素本身自己一个	
			}
		}

	var modecon = [maxmode,maxsame]
	// 获取数组众数与众数得数量值
	document.getElementById("mode").innerHTML="众数为："+modecon[0];
	// 输出众数
	document.getElementById("modemany").innerHTML="数量为："+modecon[1];
	//输出众数数量
	var mode = modecon[0];
	var a1 = arr2.indexOf(mode)
	//获取众数在数组2中第一个位置
	var a2 = arr2.indexOf(mode,a1+1)
	//获取众数在数组2中的第二个位置
	var a3 = arr2.indexOf(mode,a2+1)
	//获取众数在数组2中的 第三个位置
	document.getElementById("modeadd").innerHTML="位置在："+a1+"、"+a2+"、"+a3;	
	//输出前三位众数位置

}

// 方法二：
// 方法二使用数组本身的元素与数组本身所有的元素一一配对，配对数量最多的为众数，

// function modeNum(){
// 	var arr1 = document.getElementById("arrinput").value.split(",");
// 	var arr2 = arr1;	
// 	var samenum=0;
// 	var maxsame=0;
// 	var maxmode=0;


// 	for(var i=0;i<=arr1.length-1;i++){	
// 		for(var j=0;j<=arr2.length-1;j++){		
// 			if (arr2[j]==arr1[i]){			
// 				samenum++;				
// 			}
// 		}		
// 		if(samenum>maxsame){		
// 			maxsame=samenum;		
// 			maxmode=arr1[i];				
// 		}
// 		samenum=0;	    
// 	}


// 	var modecon = [maxmode,maxsame]
// 	document.getElementById("mode").innerHTML="众数为："+modecon[0];
// 	document.getElementById("modemany").innerHTML="数量为："+modecon[1];
// 	var mode = modecon[0];
// 	var a1 = arr2.indexOf(mode)
// 	var a2 = arr2.indexOf(mode,a1+1)
// 	var a3 = arr2.indexOf(mode,a2+1)
// 	document.getElementById("modeadd").innerHTML="位置在："+a1+"、"+a2+"、"+a3;	

// }