function addRow(item){
	if (typeof(item)!='undefined' && item.amount > 0){
		let rowContent = "<tr data-name='"+item.name+"' data-amount='"+item.amount+"'><td>"+item.name+"</td><td>"+item.amount+"</td><td>"+'tba'+"</td><td onclick='ditchCart(\""+item.name+"\")'>Del</td></tr>";
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

function orderModalUp(){
	const orderTable = document.querySelector('tbody');
	// console.log(orderTable.childNodes);
	let cartArr = [];
	orderTable.childNodes.forEach(tr =>{
		if (tr.getAttribute('data-amount')) {
			// console.log(tr.getAttribute('data-name'));
			// console.log(tr.getAttribute('data-amount'));
			cartArr.push({
				name:tr.getAttribute('data-name'),
				amount:tr.getAttribute('data-amount')
			});
		}
	});
	console.log(cartArr);
	// Response.redirect('/thanks');
	//window.location.href = '/thanks';

	let xhr = new XMLHttpRequest();
    let url = "/thanks";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            console.log(this.responseText);

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({cartArr});
    console.log(data);

    // Sending data with the request
    xhr.send(data);


	//ebből csinálj egy arrayt, azt küldd el a szervernek POST-tal, 
	//ott meg várja majd egy function
	//	ami dob neked egy emailt
	//	és végigmegy minden itemen
	//		és where name==name sold+=amount avabamount-=amount
}