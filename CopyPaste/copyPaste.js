var srcArea = Array([0,0],
	[100, 0],
	[100, 100],
	[0, 100],
	[0,0])
app.activeDocument.selection.select(srcArea);
app.activeDocument.selection.copy();

var dstArea = Array([100,100],
	[200, 100],
	[200, 200],
	[100, 200],
	[100, 100])
app.activeDocument.selection.select(dstArea);
app.activeDocument.paste();