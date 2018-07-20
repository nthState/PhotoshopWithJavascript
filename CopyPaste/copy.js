var area = Array([0,0],
	[100, 0],
	[100, 100],
	[0, 100],
	[0,0])
app.activeDocument.selection.select(area);
app.activeDocument.selection.copy();