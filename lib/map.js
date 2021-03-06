let map;
let overlay;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.7562167, lng: -73.9395342 },
    zoom: 12,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    styles: styles,
  });

  overlay = new google.maps.OverlayView();
  window.map = map;
}


// function createMapMarkers(mapName) {
//   for (let i = 0; i < locations.length; i++) {
//     let myLatLng = { lat: locations[i].lat, lng: locations[i].lng }
//     new google.maps.Marker({
//       position: myLatLng,
//       map: mapName,
//       title: `${locations[i].stationCode}`,
//     });      
//   }
// }


d3.json("locations.json").then(function(data){
  overlay.onAdd = function() {
    let layer = d3.select(this.getPanes().overlayLayer).append("div").attr("class", "stations");
    
    overlay.draw = function() {
      const projection = this.getProjection(),
      padding = 50;

      const flatData = [];
      data["stations"].forEach(station => {
        flatData.push({latitude: station.lat, longitude: station.lng, stationCode: station.stationCode});
      })
      

      let marker = layer.selectAll("svg")
        .data(d3.entries(flatData))
        .each(transform)
        .enter()
        .append("svg")
        .each(transform)
        .attr("class", "marker")
        .attr("id", function(d) { return `${d.value.stationCode}`; });

      marker.append('circle')
        .attr('r', 2)
        .attr("class", "base-circle")
        .attr('cx', padding)
        .attr('cy', padding);

      marker.append("text")
        .attr("x", padding + 7)
        .attr("y", padding)
        .attr("dy", ".31em");

    
      function transform(d) {
        d = new google.maps.LatLng(d.value.latitude, d.value.longitude);
        d = projection.fromLatLngToDivPixel(d);
        return d3.select(this)
          .style("left", (d.x - padding) + "px")
          .style("top", (d.y - padding) + "px");
      }
    };
  };
  overlay.setMap(map);
})


