//ajax
function loadElement(url, parentElement,callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			if(!callback){
							parentElement.innerHTML = xhr.responseText
			}
			else{
				callback(xhr.responseText)
			}
		}
	}
}

//控制滚动条
function toTop() {
	let a=setInterval(()=>{
		document.documentElement.scrollTop-=50;
		if(document.documentElement.scrollTop==0){
			clearInterval(a)
		}
	},1)
}

//加载选项卡
function loadTop(){
	if(!document.querySelector("section.select")){
		console.log(1);
	}
	else{
		loadElement("topCommon.html",document.querySelector("section.select"),(res)=>{
			document.querySelector("section.select").innerHTML=res
			document.querySelector("section.select>div>span").innerHTML=document.title
		})
	}
}

//点击出现弹框
function showImg(){
	if(document.title=="Gallery"){
		let arr=document.querySelectorAll("div.portf img")
		console.log(arr);
		for(let i=0;i<arr.length;i++){
			arr[i].onclick=function(){
				let imgURL=arr[i].src
				console.log(imgURL)
				let darkTk=document.getElementsByClassName("dark")[0]
				darkTk.classList.add("d-block");
				darkTk.querySelector("div>img:last-child").src=imgURL
				document.body.style.overflow="hidden";
				document.documentElement.style.overflow="hidden"
			}
		}
	}
}

//点击关闭弹框
function closeShow(){
	let darkTk=document.getElementsByClassName("dark")[0]
	darkTk.classList.remove("d-block")
	document.body.style.overflow="auto";
	document.documentElement.style.overflow="auto"
}