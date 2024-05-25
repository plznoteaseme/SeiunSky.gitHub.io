window.onload=function(){
	document.getElementById('email').onblur=function(){
		chkEmail();
	}//检查邮箱
	document.getElementById('xm').onblur=chkName;//检查姓名
	document.getElementById('tel').onblur=chkTel;//检查手机号
	document.getElementById('reason').onblur=chkTel;//检查手机号
	//表单提交事件onsubmit
	document.getElementById('myform').onsubmit=function(){
		if(chkEmail()&&chkName()&&chkTel()){
			alert("发送成功！");
			return true;
		}else{
			return false;
		}
	}
	//window.location.href='Logon.html';
}

//邮箱
function chkEmail(){
	var Email=document.getElementById('email');
	var sEmail=document.getElementById('semail');
	if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(Email.value)) {
		sEmail.innerHTML="<img src='../images/right.jpg'>";
		return true;
	} else{
		sEmail.innerHTML='Email格式错误！';
		return false;
	}
}
//手机号
function chkTel(){
	var Tel=document.getElementById('tel');
	var sTel=document.getElementById('stel');
	if (/^\d{11,}$/.test(Tel.value)) {
		sTel.innerHTML="<img src='../images/right.jpg'>";
		return true;
	} else{
		sTel.innerHTML='手机号格式错误！';
		return false;
	}
}
//姓名
function chkName(){
	var xname=document.getElementById('xm');
	var nameSpan=document.getElementById('sxm');
	if(/^[\u4e00-\u9fa5]{2,8}$/.test(xname.value)){
		nameSpan.innerHTML="<img src='../images/right.jpg'>";
			return true;
		}else{
			nameSpan.innerHTML='姓名格式错误';
			return false;
		}
}


