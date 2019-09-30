const mapboxgl = require('mapbox-gl');
// import markerType from './marker';
const markerType = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiendheG1hbiIsImEiOiJjazE2a3pheGcxNnJmM2xxZHBxYzR0aHF1In0._mhgRSt1LgK-XAGFTOKfRg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates [-74.009, 40.705]; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

markerType('hotel', [-87.6354, 41.8885]).addTo(map);
