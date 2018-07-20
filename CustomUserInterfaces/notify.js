const dlg = new Window('dialog', 'Test');

const btn = dlg.add('button', undefined, 'My Button', {name:'ok'});
btn.onClick = function() {
	alert("My button clicked");
}

const closeButton = dlg.add('button', undefined, 'Close');
closeButton.onClick = function() {
	dlg.close();
}

const test = dlg.add('button', undefined, 'Test', {name:'Run Test'});
test.onClick = function() {
	btn.notify("onClick");
	// Or
	btn.notify();
}

dlg.show();
