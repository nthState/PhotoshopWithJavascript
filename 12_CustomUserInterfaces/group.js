var window = new Window('dialog', 'My Window');

var group = window.add('group', undefined);
var label = group.add('statictext', undefined, 'My label');

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();