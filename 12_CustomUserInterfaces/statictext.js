var window = new Window('dialog', 'My Window');
var label = window.add(‘statictext’, undefined, `Hello, World!`);

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();