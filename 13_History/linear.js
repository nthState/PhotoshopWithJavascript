var inFile = File("/Users/chrisdavis/Large.psd");
var outFile = File("/Users/chrisdavis/Large.png");
var docRef = app.open(inFile);

docRef.resizeImage(100, 100, 72, ResampleMethod.BICUBIC);

var exportOpts = new ExportOptionsSaveForWeb(); 
exportOpts.format = SaveDocumentType.PNG;
exportOpts.PNG8 = false;
activeDocument.exportDocument(outFile, ExportType.SAVEFORWEB, exportOpts);

docRef.resizeImage(150, 150, 72, ResampleMethod.BICUBIC);

var exportOpts = new ExportOptionsSaveForWeb(); 
exportOpts.format = SaveDocumentType.PNG;
exportOpts.PNG8 = false;
activeDocument.exportDocument(outFile, ExportType.SAVEFORWEB, exportOpts);

docRef.close(SaveOptions.DONOTSAVECHANGES);