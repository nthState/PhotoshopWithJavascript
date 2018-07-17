var document = app.documents.add(1000, 1000, 72, "My first script");

var layerSet = document.layerSets.add();
layerSet.name = "My layer set";

var layer = document.artLayers.add();
layer.name = "My layer";

layer.move(layerSet, ElementPlacement.INSIDE);