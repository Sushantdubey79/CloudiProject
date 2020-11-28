
        mapboxgl.accessToken = mapToken;
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: Hotel.geometry.coordinates, // starting position [lng, lat]
        zoom: 4 ,// starting zoom
        pitch: 45,
        bearing: -17.6,
        container: 'map',
        antialias: true
        });
       
        new mapboxgl.Popup({ closeOnClick: true })
        new mapboxgl.Marker()
        .setLngLat(Hotel.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({offset:25})
        .setHTML(
        `<h3>${Hotel.name}</h3><p>${Hotel.location}</p>`
        )
        )
        .addTo(map)
       
        map.on('load', function () {
// Insert the layer beneath any symbol layer.
var layers = map.getStyle().layers;

var labelLayerId;
for (var i = 0; i < layers.length; i++) {
if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
labelLayerId = layers[i].id;
break;
}
}

map.addLayer(
{
'id': '3d-buildings',
'source': 'composite',
'source-layer': 'building',
'filter': ['==', 'extrude', 'true'],
'type': 'fill-extrusion',
'minzoom': 15,
'paint': {
'fill-extrusion-color': '#aaa',

// use an 'interpolate' expression to add a smooth transition effect to the
// buildings as the user zooms in
'fill-extrusion-height': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'height']
],
'fill-extrusion-base': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'min_height']
],
'fill-extrusion-opacity': 0.6
}
},
labelLayerId
);
});


map.addControl(new mapboxgl.FullscreenControl());

map.addControl(new mapboxgl.NavigationControl());

