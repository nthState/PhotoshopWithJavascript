var window = new Window('dialog', 'My Window');

var label = window.add('statictext', undefined, 'Width:');
var slider = window.add('slider', undefined, 150, 100, 300);
var edit = window.add('edittext');
edit.text = slider.value;

slider.onChanging = function() {
	edit.text = slider.value;
}
edit.onChange = function() {
	slider.value = edit.text;
}

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();