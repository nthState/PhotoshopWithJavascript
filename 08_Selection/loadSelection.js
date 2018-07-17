var channel = app.activeDocument.channels.getByName("200Offset");
app.activeDocument.selection.load(channel, SelectionType.EXTEND);