var document = app.documents.add(1000, 1000, 72, "My first script");

var layerSet = document.layerSets.add();
layerSet.name = "My layer set";

var layer = layerSet.artLayers.add();
layer.name = "My layer";