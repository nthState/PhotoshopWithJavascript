var window = new Window('dialog', 'My Window');
var items = ["A", "B", "-", "D"];
var listbox = window.add('listbox', undefined, items)


window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();