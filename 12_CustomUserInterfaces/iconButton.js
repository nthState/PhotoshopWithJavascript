const iconFile = File("/users/chris/foo.png");
var window = new Window('dialog', 'My Window');
var btn = window.add(‘iconbutton', undefined, iconFile);

btn.onClick = function() {
	alert(‘button clicked’);
} 

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();
