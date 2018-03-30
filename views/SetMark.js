/**
 * Created by qitian on 2018/3/20.
 */
var SetMark = (function() {
    /** 设置点图层 */
    var markVectorSource = new ol.source.Vector();
    var markVectorLayer = new ol.layer.Vector({
        source: markVectorSource
    });
    var SetIcon = function(markOptions){
        var markSettings = $.extend({
            markCoordinate: [0, 0],
            markAnchor: [0.5, 0.96],
            markImage: './icon.png'
        }, markOptions);  //传参变量
        var iconFeature = new ol.Feature({
            //geometry: new ol.geom.Point(markSettings.markCoordinate)
            geometry: new ol.geom.Point(ol.proj.fromLonLat(markSettings.markCoordinate))//纬度 经度
        });
        /** 创建点图标 */
        this.createMark = function () {
            var iconStyle = new ol.style.Style({
                image: new ol.style.Icon(/** @type {olx.style.IconOptions} **/({
                    anchor: markSettings.markAnchor,
                    src: markSettings.markImage,
                    img: undefined,
                    imgSize: undefined
                }))
            });
            iconFeature.setStyle(iconStyle);
            markVectorSource.addFeature(iconFeature);
            map.removeLayer(markVectorLayer);
            map.addLayer(markVectorLayer);
            /** 选择点 */
            if (true) {
                var selectStyle = {};
                var select = new ol.interaction.Select({
                    style: function(feature) {
                        var image = feature.get('style').getImage().getImage();
                        if (!selectStyle[image.src]) {
                            var canvas = document.createElement('canvas');
                            var context = canvas.getContext('2d');
                            canvas.width = image.width;
                            canvas.height = image.height;
                            context.drawImage(image, 0, 0, image.width, image.height);
                            var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                            var data = imageData.data;
                            for (var i = 0, ii = data.length; i < ii; i = i + (i % 4 == 2 ? 2 : 1)) {
                                data[i] = 255 - data[i];
                            }
                            context.putImageData(imageData, 0, 0);
                            selectStyle[image.src] = createStyle(undefined, canvas);
                        }
                        return selectStyle[image.src];
                    }
                });
                map.addInteraction(select);
                map.on('pointermove', function(evt) {
                    map.getTargetElement().style.cursor =
                        map.hasFeatureAtPixel(evt.pixel) ? 'pointer' : '';
                });
            }
        }
        /** 删除点 */
        this.deleteMark = function () {
            markVectorSource.removeFeature(iconFeature);
            map.removeLayer(markVectorLayer);
        }
        /** 修改点图片 */
        this.changeMark = function (markImage) {
            iconFeature.setStyle(new ol.style.Style({
                image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
                    anchor: markSettings.markAnchor,
                    src: markImage,
                    img: undefined,
                    imgSize: undefined
                }))
            }));

            /** 使用img和imgSize来改变图片 */
            // var markIcon = new Image();
            // markIcon.src = markImage;
            // markIcon.width = 70;
            // markIcon.height = 70;
            // //markIcon.hidden = true;
            // var markPicture = document.getElementsByClassName("ol-unselectable")[0].appendChild(markIcon);
            // iconFeature.setStyle(new ol.style.Style({
            //     image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
            //         anchor: markSettings.markAnchor,
            //         src: undefined,
            //         img: markIcon,
            //         imgSize: [markIcon.width, markIcon.height]
            //     }))
            // }));

            /** 等比例缩小图片 */
            // if( markIcon.width> 70) {
            //     var scaling = 1-(markIcon.width-70)/markIcon.width;
            //     //计算缩小比例
            //     markIcon.width = markIcon.width * scaling;
            //     markIcon.height = markIcon.height * scaling;
            // }
        }
    }
    return SetIcon;
})()