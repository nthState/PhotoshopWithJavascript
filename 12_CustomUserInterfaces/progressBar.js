var window = new Window('dialog', 'My Window');

var progress = window.add('progressbar', undefined, 0, 100);

window.startButton = window.add('button', undefined, 'Increase Progress')
window.startButton.onClick = function() {
	progress.value += 10;
}

window.closeButton = window.add('button', undefined, 'Close')
window.closeButton.onClick = function() {
	window.close();
}

window.show();