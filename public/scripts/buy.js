const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modalbg');

function buy(){
	console.log('We bought '+modal.getAttribute("data-amount")+' db '+modal.getAttribute("data-name"));
	document.querySelector('.modalbg').style.display="none";	
	modalBg.style.display="none";
}

function openBuyModal(whocalled){
	
	const reqAmount = whocalled.innerText.split(' ')[1];
	const reqThing = whocalled.getAttribute("data-thing");

	document.querySelector('.modalbg').style.display='block';

	modal.setAttribute('data-name',reqThing);
	modal.setAttribute('data-amount',reqAmount);
	document.querySelector('.modal p').innerText = reqAmount+'db '+reqThing+' added to the cart';
	document.cookie = reqThing+"="+reqAmount;
	whocalled.innerText = 'BUY 1';
}

window.addEventListener("keypress", function() {
	event.preventDefault();
  	if (modalBg.style.display!='none' && event.code=='Enter') {
  		buy();
  	}
});
