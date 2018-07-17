/**
Create a golden spiral
http://www.bbc.co.uk/guides/zqp37p3
*/

function createSpiral(center, scale) {

	var division = 2;
	var sequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
	
	var lineArray = new Array();
	
	lineArray[0] = new PathPointInfo;
	lineArray[0].kind = PointKind.CORNERPOINT;
	lineArray[0].anchor = center;
	lineArray[0].leftDirection = center;
	lineArray[0].rightDirection = center;
	
	var direction = 0;
	var last = center
	for (var i = 0; i < sequence.length; i++) {
	
		var box = sequence[i] * scale;
		var to = last.slice();
		var toControlLeft = last.slice();
		var toControlRight = last.slice();
		
		switch(direction) {
			case 0: //left
				to[0] -= box;
				to[1] += box;
				
				if (i == 0) {
					toControlLeft[0] -= box;
					toControlRight = toControlLeft.slice();
				} else {
					toControlRight = to.slice();
					toControlRight[1] -= box/division;
					
					var temp = lineArray[i].anchor.slice();
					temp[0] -= box/division;
					lineArray[i].leftDirection = temp;
				}
				
				break;
			case 1: //up
				to[0] += box;
				to[1] += box;
				
				toControlRight = to.slice();
				toControlRight[0] -= box/division;
				
				var temp = lineArray[i].anchor.slice();
				temp[1] += box/division;
				lineArray[i].leftDirection = temp;
				
				break;
			case 2: //right
				to[0] += box;
				to[1] -= box;
				
				toControlRight = to.slice();
				toControlRight[1] += box/division;
				
				var temp = lineArray[i].anchor.slice();
				temp[0] += box/division;
				lineArray[i].leftDirection = temp;
				
				break;
			case 3: //down
				to[0] -= box;
				to[1] -= box;
				
				toControlRight = to.slice();
				toControlRight[0] += box/division;
				
				var temp = lineArray[i].anchor.slice();
				temp[1] -= box/division;
				lineArray[i].leftDirection = temp;
				
				break;
		}
	
		//alert("from: " + last + ", to: " + to + " box: " + box + " on dir: "  + direction);
		lineArray[i+1] = new PathPointInfo;
		lineArray[i+1].kind = PointKind.CORNERPOINT;
		lineArray[i+1].anchor = to;
		lineArray[i+1].leftDirection = toControlLeft;
		lineArray[i+1].rightDirection = toControlRight;
	
		last = to;
		direction += 1;
		if (direction == 4) {
			direction = 0;
		}
	}
	
	
	var lineSubPathArray = new Array();
	lineSubPathArray[0] = new SubPathInfo();
	lineSubPathArray[0].operation = ShapeOperation.SHAPEXOR;
	lineSubPathArray[0].closed = false;
	lineSubPathArray[0].entireSubPath = lineArray;


	
	return lineSubPathArray
}

//var document = app.documents.add(1000, 1000, 72, "My Spiral");
//var layer = document.artLayers.add();

var document = app.activeDocument;
var lineSubPathArray = createSpiral([500, 500], 10);

//create the path item
var myPathItem = document.pathItems.add("A spiral", lineSubPathArray);
// stroke it so we can see something
myPathItem.strokePath(ToolType.BRUSH);

//myPathItem.makeSelection(0, false, SelectionType.EXTEND)