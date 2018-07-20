var window = new Window('dialog', 'My Window');

var panel = window.add('panel', undefined, 'My Panel');
var label = panel.add('statictext', undefined, 'My label');

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();
