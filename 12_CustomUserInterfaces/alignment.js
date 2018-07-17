var window = new Window('dialog', 'Test');

var panel = window.add('panel', undefined, 'My Panel');

var group = panel.add('group');
group.orientation = 'column';

var text = group.add('statictext', undefined, 'Message width:');
text.alignment = 'left';
var slider = group.add('slider', undefined, 150, 100, 300);
slider.alignment = 'left';
var edit = group.add('edittext');
edit.alignment = 'left';

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();