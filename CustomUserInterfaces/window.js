var window = new Window('dialog', 'My Window');
window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();
