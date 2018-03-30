/**
 * Created by qitian on 2018/3/20.
 */
var mapSettiings = $.extend({
    mapSouce: new ol.source.OSM(),
    mapCenter: [0, 0],
    mapZoom: 2
}, mapOptions);

var accessibleSource = mapSettiings.mapSouce;
var accessibleLayers = [
    new ol.layer.Tile({
        source: accessibleSource
    })
];
var accessibleView = new ol.View({
    center: mapSettiings.mapCenter,
    zoom: mapSettiings.mapZoom
});
var map = new ol.Map({
    layers: accessibleLayers,
    target: mapSettiings.mapTarget,  //调用CommonVariable.js中的变量
    view: accessibleView
});