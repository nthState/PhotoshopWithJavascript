var area = Array([0,0],
	[100, 0],
	[100, 100],
	[0, 100],
	[0,0])
app.activeDocument.selection.select(area)
area = Array([200,200],
	[300, 200],
	[300, 300],
	[200, 300],
	[200, 200])
app.activeDocument.selection.select(area, SelectionType.EXTEND)