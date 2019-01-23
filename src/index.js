//console.log('Hello!');
const newMarker = require('./marker.js')
const mapboxgl = require('mapbox-gl')
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhbmVyciIsImEiOiJjanI5bnd6eDQwNjZsNDNubzE3MTdycTYxIn0.yqD7PhLYL5lNIc_CPYe2ig';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10"
});

const chicagoFullstack = [-87.641, 41.895]
const park = [-87.641216, 41.893350]
const testMArker = newMarker(chicagoFullstack, 'hotels')
testMArker.addTo(map)
