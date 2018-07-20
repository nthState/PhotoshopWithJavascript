var window = new Window('dialog', 'My Window');

var label = window.add('statictext', undefined, 'not set');

var scrollbar = window.add('scrollbar', undefined, 0, 0, 100);
scrollbar.onChanging = function() {
	label.text = scrollbar.value;
}

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();