var window = new Window('dialog', 'My Window');

var alertButton = window.add('button', undefined, 'Show alert');
alertButton.onClick = function() {
	alert('My alert text', 'My alert title');
}

var confirmButton = window.add('button', undefined, 'Show confirm');
confirmButton.onClick = function() {
	var result = confirm('My confirm text', true, 'My confirm title');
	alert(result + ' was confirmed');
}

var promptButton = window.add('button', undefined, 'Show prompt');
promptButton.onClick = function() {
	var result = prompt('My prompt text', 'default value', 'My prompt title');
	alert(result + ' was prompted');
}

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();