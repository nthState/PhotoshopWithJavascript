var saveFile = File("/Users/chrisdavis/test.jpg");

var saveOptions = new JPEGSaveOptions(); 
saveOptions.embedColorProfile = true;
saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
saveOptions.matte = MatteType.NONE; 
saveOptions.quality = 9;
app.activeDocument.saveAs(saveFile, saveOptions, true, Extension.LOWERCASE);