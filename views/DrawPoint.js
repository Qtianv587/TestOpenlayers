// var source = new ol.source.Vector();
//
//

//
//
// var locations = [
//     [103.64571748, 30.95171696],
//     [103.89455962, 30.74200533],
//     [103.94873996, 30.72173613],
//     [103.94683668, 30.64887018],
//     [103.96086817, 30.62649369],
//     [104.06508183, 30.55749564],
//     [103.98293138, 30.52399569],
//     [104.01631848, 30.45862630],
//     [104.03029022, 30.43650417],
//     [104.05158008, 30.45392193],
//     [104.06327311, 30.47830918],
//     [104.17394894, 30.58033224],
//     [104.12355747, 30.66655457],
//     [104.20312364, 30.56721481],
//     [104.23549366, 30.51404565],
//     [104.09463676, 30.55212751]
//     ];

// var locations1 = [
//     // [103.67116900, 30.99844700],
//     [103.67501700, 30.99355800],
//     // [103.63914000, 30.94599000],
//     [103.88763215, 30.76504907],
//     [103.94288341, 30.74144266],
//     [103.94230547, 30.66400108],
//     [103.95693158, 30.63966795],
//     [104.06376113, 30.56233678],
//     [103.98117663, 30.52980002],
//     [104.01620318, 30.45900151],
//     [104.03076406, 30.43494121],
//     [104.05200459, 30.45266653],
//     [104.06339600, 30.47816800],
//     [104.17360280, 30.58252194],
//     [104.12096731, 30.67614505],
//     [104.20339500, 30.56746700],
//     [104.23716544, 30.50968523],
//     [104.09377949, 30.55551104]
//     ];

var locations = [
    [104.0941368753556,30.667517022350808],
    [103.7015246017836,30.996398979618917],
];

var locations1 = [
    // [103.66785049438477,30.997770220259255],
    // [103.89324188232418,30.764037837201016],
    // [103.95529747009279,30.739770144244048],
    // [103.94774436950682,30.662795991534992],
    // [103.97289276123047,30.637727405278767],
    // [104.06855106353758,30.556865600967896],
    // [103.9940071105957,30.524487205551623 ],
    // [104.02623653411864,30.45241026517465 ],
    // [104.03984069824217,30.427731349486336],
    // [104.0603542327881,30.447045814895446 ],
    // [104.06661987304683,30.480781444689157],
    // [104.16317939758298,30.573383292768554],
    // [104.11383211612703,30.67022947891941 ],
    // [104.19798374176024,30.559821994028752],
    // [104.23879623413085,30.512582844999542],
    // [104.0892791748047,30.547256701546004 ]
    //ABK
    [103.61929312348367,30.997090386258407],
    //BLC
    [103.68239192292093,30.943223405225226],
    //ELF
    [103.96349698305127,30.839931087224983],
    //CMD
    [103.8012505788356,30.84840708844939],
    //FMG
    [104.0152958035469,30.74941237459693],
    //GHI
    [104.0470996456029,30.72042195936692],
    //DIJ
    [104.081002548337,30.64504167066022],
    //JHN
    [104.0854741260409,30.610005140332945],
    //KNO
    [104.05374929308887,30.49752354310688],
];

function generatePoints(arr) {
    var points = new Array(arr.length);
    for(var i = 0; i < arr.length; i ++) {
        points[i] = new ol.Feature({geometry: new ol.geom.Point(ol.proj.fromLonLat(arr[i]))});
    }

    return points;
}

function setStyle(points, color) {
    for (var i = 0; i < points.length; i++) {
        points[i].setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                    color: color,
                    src: './icon.png'
                })
            })
        );
    }
}

var points = generatePoints(locations);
var points1 = generatePoints(locations1);
setStyle(points, '#ff0300');
setStyle(points1, '#0b0aff');

var source = new ol.source.Vector({
    features: points
});
var source1 = new ol.source.Vector({
    features: points1
});

var layer = new ol.layer.Vector({
    source: source
});
var layer1 = new ol.layer.Vector({
    source: source1
});

map.addLayer(layer);
// map.addLayer(layer1);