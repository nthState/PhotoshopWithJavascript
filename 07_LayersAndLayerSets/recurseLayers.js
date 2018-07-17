function recurseLayersIn(obj, onLayer, onLayerSet) {
	const layerCount = obj.artLayers.length;
	const layerSetCount = obj.layerSets.length;
	
	for (var i = 0; i < layerCount; i++) {
		var layer = obj.artLayers[i];
		onLayer(layer);
	}
	
	for (var i = 0; i < layerSetCount; i++) {
		var layerSet = obj.layerSets[i];
		onLayerSet(layerSet);
		recurseLayersIn(layerSet, onLayer, onLayerSet);
	}
}

function layerCallback(layer) {
	alert(layer.name);
}
function layerSetCallback(layersSet) {
	alert(layersSet.name);
}

recurseLayersIn(app.activeDocument, layerCallback, layerSetCallback);