// Okay most (well, all) of this code comes from http://stackoverflow.com/a/31208479

var webview = null;

function isSafeUrl(url){
	return !!url.match(/^(?:ftp|https?):\/\//i);
}

function onNewWindow(event){
	console.log(event.windowOpenDisposition);
	if(!isSafeUrl(event.targetUrl)){
		console.warn('unsafe URL blocked : '+event.targetUrl);
		event.window.discard();
		return;
	}

	var newWindow = null, features = '';

	switch (event.windowOpenDisposition) {
		case 'ignore':
			console.log('Ignoring new window request');
			return;
		case 'save_to_disk':
			console.log('Save to disk isn\'t implemented (yet?)');
			return;
		case 'current_tab':
		case 'new_window':
		case 'new_popup':
		case 'new_foreground_tab':
			if (event.initialWidth && event.initialHeight) {
				features = 'width=' + event.initialWidth + ',height=' + event.initialHeight;
			}

			newWindow = open(event.targetUrl, '_blank', features);
			console.log("new window");
			newWindow.focus();
			break;
		}
}
function onDomReady() {
	webview = document.getElementById('webview');
	webview.addEventListener('newwindow', onNewWindow);
}

document.addEventListener('DOMContentLoaded', onDomReady);
