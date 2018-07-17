var window = new Window('dialog', 'My Window');
var edit = window.add('edittext');

edit.onChanging = function() {
	
}
edit.onChange = function() {
	
}

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();