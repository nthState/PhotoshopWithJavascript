var document = app.documents.add(1000, 1000, 72, "My New Layer");
var layer = document.artLayers.add();
layer.name = "Layer1"

var foundLayer = document.artLayers['Layer1'];
alert("Found: " + foundLayer);