// Fill with a color
var fillColor:SolidColor = new SolidColor();
fillColor.rgb.red = 255;
fillColor.rgb.green = 0;
fillColor.rgb.blue = 0;
app.activeDocument.selection.selectAll();
app.activeDocument.selection.fill( fillColor, ColorBlendMode.VIVIDLIGHT, 25, false );