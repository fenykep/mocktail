function addRow(item){
	if (typeof(item)!='undefined' && item.amount > 0){
		let rowContent = "<tr><td>"+item.name+"</td><td>"+item.amount+"</td><td>"+'tba'+"</td><td onclick='ditchCart(\""+item.name+"\")'>Del</td></tr>";
		document.querySelector('tbody').innerHTML += rowContent;
		// return 0;
	}
	// else return 1;
}

function populateCart(){
	const cookie = getCookieAsObj();
	if (cookie===0) {
		return 0;
	}
	// document.querySelector('h1').innerText="Your cart's contents";
	// document.querySelector('.orderBtn').style.display="block";
	// let isBasketEmtpy = 0;
	cookie.forEach(i => {
		// isBasketEmtpy += addRow(i);
		addRow(i);
	});
	document.querySelector('h1').innerText= !document.querySelector('tbody td')?"Your cart is empty :(":"Your cart's contents";
	document.querySelector('.orderBtn').style.display= !document.querySelector('tbody td')?"none":"block";
}

function getCookieAsObj(){
	if(document.cookie===''){return 0}
	let retArr = [];
	document.cookie.split(';').forEach(i => {
		const pair = i.trim().split('=');
		let obj = {};
		obj.name = pair[0];
		obj.amount = pair[1];
		retArr.push(obj);
	});
	return retArr;
}

function ditchCart(ditchable){
	console.log(ditchable);
	document.cookie = ditchable + '=0';
	window.location.reload();
}