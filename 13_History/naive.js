var historyState = null;

function main() {
	var inFile = File("/Users/chrisdavis/Documents/Projects/PhotoshopWithJavascript/Scripts/Large.psd");
	var outFile = File("/Users/chrisdavis/Documents/Projects/PhotoshopWithJavascript/Scripts/Large.png");
	var docRef = app.open(inFile);
	
	// Save a state of the document
	takeSnapShot();

	docRef.resizeImage(100, 100, 72, ResampleMethod.BICUBIC);

	var exportOpts = new ExportOptionsSaveForWeb(); 
	exportOpts.format = SaveDocumentType.PNG;
	exportOpts.PNG8 = false;
	activeDocument.exportDocument(outFile, ExportType.SAVEFORWEB, exportOpts);
	
	// Restore the document to how it was after it was first opened.
	restoreSnapShot();

	docRef.resizeImage(150, 150, 72, ResampleMethod.BICUBIC);

	var exportOpts = new ExportOptionsSaveForWeb(); 
	exportOpts.format = SaveDocumentType.PNG;
	exportOpts.PNG8 = false;
	activeDocument.exportDocument(outFile, ExportType.SAVEFORWEB, exportOpts);

	docRef.close(SaveOptions.DONOTSAVECHANGES);
}

function takeSnapShot() {
	historyState = activeDocument.activeHistoryState;
}

function restoreSnapShot() {
	activeDocument.activeHistoryState = historyState;
}