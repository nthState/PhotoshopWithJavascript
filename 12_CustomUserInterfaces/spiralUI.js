#include "/Users/chrisdavis/Documents/Projects/PhotoshopWithJavascript/Documents/spiral.js"

function buildGoldenSpiralUI() {

	var currentPath = null;

	var window = new Window('dialog', 'Golden Spiral');

	// X/Y
	
	var xypanel = window.add('panel', undefined, 'X/Y Position');
	var xGroup = xypanel.add('group');
	var xtext = xGroup.add('statictext', undefined, 'X Position');
	var xslider = xGroup.add('slider', undefined, 150, 0, 300);
	var xedit = xGroup.add('edittext');
	xslider.onChanging = function() {
		xedit.text = this.value;
		updatePath();
	}
	xedit.onChange = function() {
		xslider.value = xedit.text;
		updatePath();
	}

	var yGroup = xypanel.add('group');
	var ytext = yGroup.add('statictext', undefined, 'Y Position:');
	var yslider = yGroup.add('slider', undefined, 150, 0, 300);
	var yedit = yGroup.add('edittext');
	yslider.onChanging = function() {
		yedit.text = this.value;
		updatePath();
	}
	yedit.onChange = function() {
		yslider.value = yedit.text;
		updatePath();
	}
	
	// Scale

	var scalepanel = window.add('panel', undefined, 'Scale');
	var scaleGroup = scalepanel.add('group');
	var scaletext = scaleGroup.add('statictext', undefined, 'Scale:');
	var scaleslider = scaleGroup.add('slider', undefined, 1, 1, 300);
	var scaleedit = scaleGroup.add('edittext');
	scaleslider.onChanging = function() {
		scaleedit.text = this.value;
		updatePath();
	}
	scaleedit.onChange = function() {
		scaleslider.value = scaleedit.text;
		updatePath();
	}

	// Buttons

	var buttonsGroup = window.add('group');

	var applyButton = buttonsGroup.add('button', undefined, 'Draw')
	applyButton.onClick = function() {

		currentPath.strokePath(ToolType.BRUSH);
	}
	var selectButton = buttonsGroup.add('button', undefined, 'Select')
	selectButton.onClick = function() {

		currentPath.makeSelection(0, false, SelectionType.EXTEND)
	}
	closeButton = buttonsGroup.add('button', undefined, 'Close')
	closeButton.onClick = function() {
		window.close();
	}

	window.show();
	
	function updatePath() {
		var document = app.activeDocument;
		var lineSubPathArray = createSpiral([xslider.value, yslider.value], scaleslider.value);

		document.pathItems.removeAll();

		//create the path item
		currentPath = document.pathItems.add("A spiral", lineSubPathArray);
	}
}


buildGoldenSpiralUI();