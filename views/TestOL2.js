/**
 * Created by qitian on 2018/3/20.
 */
function addMarker(markerName,icon,ll, popupClass, popupContentHTML, closeBox, overflow) {

    var feature = new OpenLayers.Feature(markerName,ll,{icon:icon.clone()});
    feature.closeBox = closeBox;
    feature.popupClass = popupClass;
    feature.data.popupContentHTML = popupContentHTML;
    feature.data.overflow = (overflow) ? "auto" : "hidden";

    var marker = feature.createMarker();
    var markerClick = function (evt) {
        if (this.popup == null) {
            this.popup = this.createPopup(this.closeBox);
            this.popup.setBackgroundColor("#E2E7EB");
            this.popup.setBorder("1px #0066ff solid");
            map.addPopup(this.popup);
            this.popup.show();
        } else {
            this.popup.toggle();
        }
        currentPopup = this.popup;
        OpenLayers.Event.stop(evt);
    };
    marker.events.register("mousedown", feature, markerClick);
    markerName.addMarker(marker);
}