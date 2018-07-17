var area = Array([200,200],
	[300, 200],
	[300, 300],
	[200, 300],
	[200, 200])
app.activeDocument.selection.select(area);


var channel = app.activeDocument.channels.add();
channel.name = "200Offset";
channel.kind = ChannelType.SELECTEDAREA;
app.activeDocument.selection.store(channel);