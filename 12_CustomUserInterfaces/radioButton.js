var window = new Window('dialog', 'My Window');

var panel = window.add('panel', undefined, 'Pick an option: Not set');

var red = panel.add('radiobutton', undefined, 'Red');
var blue = panel.add('radiobutton', undefined, 'Blue');
var green = panel.add('radiobutton', undefined, 'Green');

red.onClick = whichSelection;
blue.onClick = whichSelection;
green.onClick = whichSelection;

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();

function whichSelection() {
	if (red.value) {
		panel.text = "Pick an option: Red";
	}
	if (green.value) {
		panel.text = "Pick an option: Green";
	}
	if (blue.value) {
		panel.text = "Pick an option: Blue";
	}
}
