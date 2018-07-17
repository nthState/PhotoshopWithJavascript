// Fill with a color
const fillColor = new SolidColor();
fillColor.rgb.hexValue = “FF0000”;
app.activeDocument.selection.selectAll();
app.activeDocument.selection.fill( fillColor, ColorBlendMode.VIVIDLIGHT, 25, false );