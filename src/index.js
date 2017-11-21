const buildMarker = require('./marker')
console.log("Geography! More notes")

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoibnVubnlyZXllcyIsImEiOiJjamE5dWhoZHEwYzBoMndxcGQwYjQ3MG84In0.uEnk5ddZHPfgraGRLvQmZQ';


const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


const marker = buildMarker("hotel", [-73.9605399, 40.7243401]); // or [-87.6354, 41.8885]
marker.addTo(map);


//const restaurant = buildMarker("restaurant", [-73.9560744, 40.6735182]); // or [-87.6354, 41.8885]

buildMarker("restaurant", [-73.9560744, 40.6735182]).addTo(map);


