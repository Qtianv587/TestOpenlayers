/**
 * Created by qitian on 2018/3/20.
 */
/** set map
 * para
 * var mapSettiings = $.extend({
        mapSouce: new ol.source.OSM(),
        mapCenter: [0, 0],
        mapZoom: 2
    }, mapOptions);
 **/
var mapOptions = {
    mapTarget: 'map',
    mapCenter: ol.proj.fromLonLat([104.0776, 30.5792]),
    mapZoom: 10
}