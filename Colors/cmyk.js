// Fill with a color
const myColor = new SolidColor();
MyColor.cmyk.cyan = 50;
MyColor.cmyk.magenta = 50;
MyColor.cmyk.yellow = 50;
MyColor.cmyk.black = 50;
app.activeDocument.selection.selectAll();
app.activeDocument.selection.fill( fillColor, ColorBlendMode.VIVIDLIGHT, 25, false );