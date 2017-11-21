const mapboxgl = require("mapbox-gl");


const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) =&gt; {
    switch(type) {
        case 'hotel':
        new mapboxgl.Marker(hotelEL).setLngLat(coords).addTo(map);
    }
};








const hotelEL = document.createElement("div");
hotelEL.style.width = "32px";
hotelEL.style.height = "39px";
hotelEL.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";


new mapboxgl.Marker(hotelEL).setLngLat([-74.009, 40.705]).addTo(map);