var saveFile = File("/Users/chrisdavis/test.png");

var saveOptions = new ExportOptionsSaveForWeb();
saveOptions.format = SaveDocumentType.PNG;
saveOptions.PNG8 = false;
app.activeDocument.exportDocument(saveFile, ExportType.SAVEFORWEB, saveOptions);
