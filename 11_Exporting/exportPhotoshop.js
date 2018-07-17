var saveFile = File("/Users/chrisdavis/test.psd");

var saveOptions = new PhotoshopSaveOptions(); 
app.activeDocument.saveAs(saveFile, saveOptions, true, Extension.LOWERCASE);