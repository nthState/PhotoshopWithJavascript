var window = new Window('dialog', 'My Window');
var items = ["A", "B", "-", "D"];
var dropdown = window.add('dropdownlist', undefined, items);
dropdown.selection = 3;
var label = window.add('statictext', undefined, 'Selected?');

dropdown.onChange = function() {
	label.text = dropdown.selection;
}

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();