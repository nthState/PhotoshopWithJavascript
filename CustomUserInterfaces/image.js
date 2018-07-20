const iconFile = File("/users/chris/foo.png");
var window = new Window('dialog', 'My Window');
var image = window.add(‘image’, undefined, iconFile);

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();