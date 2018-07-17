var area = Array([200,200],
	[300, 200],
	[300, 300],
	[200, 300],
	[200, 200])
app.activeDocument.selection.select(area);
app.activeDocument.selection.expand("50px");