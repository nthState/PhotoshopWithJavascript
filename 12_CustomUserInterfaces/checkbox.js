var window = new Window('dialog', 'My Window');
var checkbox = window.add('checkbox', undefined, 'Are you sure?');
var label = window.add('statictext', undefined, 'Selected?');

checkbox.onClick = function() {
	label.text = checkbox.value;
}

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();
