const mapboxgl = require('mapbox-gl')
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhbmVyciIsImEiOiJjanI5bnd6eDQwNjZsNDNubzE3MTdycTYxIn0.yqD7PhLYL5lNIc_CPYe2ig';

const imgUrl = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const newMarker = function(coord, type) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url('${imgUrl[type]}')`
  let newMarkerHere = new mapboxgl.Marker(markerDomEl).setLngLat(coord)
  return newMarkerHere
}

module.exports = newMarker
