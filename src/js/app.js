var Hello = require('./hello');

Hello('Webpack');

var video = document.querySelector("#video-element");

if (navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices.getUserMedia({ video: true })
	.then(function (stream) {
		video.srcObject = stream;
	})
	.catch(function (error) {
		console.log("Something went wrong!");
		console.log(error);
	});
}
