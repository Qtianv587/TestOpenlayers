var vectorone = new ol.layer.Tile({
    source: new ol.source.OSM()

});

//加载geojson数据
var GeoJsonLayer = new ol.layer.Vector({
    title: 'add Layer',
    source: new ol.source.Vector({
        projection: 'EPSG:4326',
        url: '.\\处理厂.geojson',
        format:new ol.format.GeoJSON()
    }),
});

var map = new ol.Map({
    layers: [
        vectorone, GeoJsonLayer
    ],
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: ({
            collapsible: true
        })
    }),
    view: new ol.View({
        center: ol.proj.fromLonLat([104.0776, 30.5792]),
        zoom: 10
    })
});