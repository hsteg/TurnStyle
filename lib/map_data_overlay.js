class MapOverlay {
  constructor() {
    this.map = window.map;
    this.bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.5221652, -74.2165856),
      new google.maps.LatLng(41.0081637, -73.6849845)
    );
  }

  start() {
    const overlay = new google.maps.OverlayView();
    const box = document.createElement('div');
    box.style.fill = '#ffffff';
    debugger
    box.setMap(this.map);
    
    // marker.setMap(this.map);
  }

}

export default MapOverlay;