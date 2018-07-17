var window = new Window('dialog', 'Test');

var panel = window.add('panel', undefined, 'My Panel');

var group = panel.add('group');
group.orientation = 'column';

var text = group.add('statictext', undefined, 'Message width:');
var slider = group.add('slider', undefined, 150, 100, 300);
var edit = group.add('edittext');

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();