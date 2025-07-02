function sendToinsta(){
	let instaid = "abhayan_here";

	let name = document.getElementById('name').value;
	let message = document.getElementById('message').value;

	var url = "https://ig.me/m/" + instaid + "?text="
	+ "Name : " +name+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}