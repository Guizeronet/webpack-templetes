module.exports = function (name) {

	document.getElementById('app').innerText = `Hello ${name}`;

	let status = true;

	setInterval(() => {
		if(status) {
			document.getElementById('app').innerText = `HTTPS ${name}!`;
		} else {
			document.getElementById('app').innerText = `Hello ${name}`;
		}
		status = !status;
		
	}, 1000);

};