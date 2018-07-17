// Say the date and time
var document = app.documents.add(1000, 1000, 72, "My first script");
var layer = document.artLayers.add();
layer.kind = LayerKind.TEXT;
layer.textItem.contents = new Date().toString();