function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.7362167, lng: -73.9595342 },
    zoom: 13,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    styles: styles,
  });
  window.map = map;
  createMapMarkers(map);
}


function createMapMarkers(mapName) {
  for (let i = 0; i < locations.length; i++) {
    let myLatLng = { lat: locations[i].lat, lng: locations[i].lng }
    new google.maps.Marker({
      position: myLatLng,
      map: mapName,
      title: `${locations[i].stationCode}`,
    });      
  }
}

