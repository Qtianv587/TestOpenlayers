// var fs = require('fs');
// var json = require("C:\\Users\\Administrator\\Desktop\\TestOpenlayers\\views\\json_file\\河网_方向数据");
// var data = {displayFieldName:"",fieldAliases:{angle:"angle"},geometryType:"esriGeometryPoint",spatialReference:
//         {"wkid":4326,"latestWkid":4326},fields:[{"name":"angle","type":"esriFieldTypeDouble","alias":"angle"}],features:[
//
//     ]}
// for(var i = 0; i < json.geometries.length; ++i){
//
//     data.features.push({"attributes":{"angle":Number(json.geometries[i].properties.angle)},"geometry":{x:json.geometries[i].coordinates[0],y:json.geometries[i].coordinates[1]}})
// }
// fs.writeFileSync("./river_direction.json",JSON.stringify(data));




var fs = require('fs');
var json = require("C:\\Users\\Administrator\\Desktop\\TestOpenlayers\\views\\json_file\\河网_堤防数据");


var data = {displayFieldName:"",fieldAliases:{status_now:"status_now", standard:"standard", is_achieved:"is_achieved"},geometryType:"esriGeometryPolygon",spatialReference:
    {"wkid":4326,"latestWkid":4326},fields:[{"name":"status_now","type":"esriFieldTypeDouble","alias":"status_now"},{"name":"standard","type":"esriFieldTypeDouble","alias":"standard"},{"name":"is_achieved","type":"esriFieldTypeDouble","alias":"is_achieved"}],features:[

    ]}

for(var i = 0; i < json.geometries.length; ++i){
    data.features.push({"attributes":{"status_now":Number(json.geometries[i].properties.status_now),"standard":Number(json.geometries[i].properties.standard),"is_achieved":Number(json.geometries[i].properties.is_achieved)},"geometry":
            {"rings":
                [[json.geometries[i].coordinates[0][0],
                    json.geometries[i].coordinates[0][1],
                    json.geometries[i].coordinates[0][2],
                    json.geometries[i].coordinates[0][3],
                    json.geometries[i].coordinates[0][0]]]}})
}
fs.writeFileSync("./river_defense.json",JSON.stringify(data));



// x:json.geometries[i].coordinates[0][0][0],y:json.geometries[i].coordinates[0][0][1]}





