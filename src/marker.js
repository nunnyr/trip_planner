const mapboxgl = require("mapbox-gl");


const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    
    if(type === 'hotel') {
        const hotelEL = document.createElement("div");
        hotelEL.style.width = "32px";
        hotelEL.style.height = "39px";
        hotelEL.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
        return new mapboxgl.Marker(hotelEL).setLngLat(coords);
    }

        if(type === 'restaurant') {
            const restaurantEL = document.createElement("div");
            restaurantEL.style.width = "32px";
            restaurantEL.style.height = "39px";
            restaurantEL.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
            return new mapboxgl.Marker(restaurantEL).setLngLat(coords);
        }
             if(type === 'activity') {
                const activityEL = document.createElement("div");
                activityEL.style.width = "32px";
                activityEL.style.height = "39px";
                activityEL.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
                return new mapboxgl.Marker(activityEL).setLngLat(coords);
            }
};

// `url(${iconURLs[markerType]}`
module.exports = buildMarker;