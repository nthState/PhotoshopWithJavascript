// Hello world, with color
var document = app.documents.add(1000, 1000, 72, "My first script");

const redColor = new SolidColor()
redColor.rgb.hexValue = "FF0000";

var layer = document.artLayers.add();
layer.kind = LayerKind.TEXT;
layer.textItem.position = [500, 500]; // Short hand
layer.textItem.color = redColor;
layer.textItem.size = 80;
layer.textItem.justification = Justification.CENTER;
layer.textItem.contents = "Hello, World!";