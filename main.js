chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('webview.html', {
		id: "browserWinID",
		frame: {
			color: "#2A56C6" // Change the color here
		},
		innerBounds: {
			'width': 1024, // Change size here
			'height': 768
		}
	});
});