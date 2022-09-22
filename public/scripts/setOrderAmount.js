function setOrderAmount(whocalled,uOd){
	var midBtn = whocalled.parentNode.childNodes[1];
	if (uOd == '+') {
		midBtn.innerText = 'BUY ' + String(Number(midBtn.innerText.split(' ')[1]) + 1);
	}
	else{
		if(midBtn.innerText.split(' ')[1] > 1) midBtn.innerText = 'BUY ' + String(Number(midBtn.innerText.split(' ')[1]) - 1);
	}
}