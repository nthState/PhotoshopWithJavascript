var saveFile = File("/Users/chrisdavis/test.gif");

var saveOptions = new GIFSaveOptions(); 
saveOptions.embedColorProfile = true;
saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
saveOptions.matte = MatteType.NONE; 
saveOptions.interlaced = false; 
saveOptions.transparency = false;
app.activeDocument.saveAs(saveFile, saveOptions, true, Extension.LOWERCASE);