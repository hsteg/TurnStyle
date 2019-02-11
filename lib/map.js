let map;
let overlay;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.7362167, lng: -73.9595342 },
    zoom: 13,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    styles: styles,
  });

  
  overlay = new google.maps.OverlayView();
  // MapOverlay.prototype = new google.maps.OverlayView();
  // overlay = new MapOverlay(map);
  window.map = map;
  // window.overlay = overlay;
  // createMapMarkers(map);
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

// function MapOverlay(map) {
  
//   this.map_ = map;
//   this.bounds_ = new google.maps.LatLngBounds(
//     new google.maps.LatLng(40.5221652, -74.2165856),
//     new google.maps.LatLng(41.0081637, -73.6849845)
//   );
//   this.setMap(null);
//   this.box_ = null;


//   this.onAdd = function() {
//     const box = document.createElement('div');
//     box.style.fill = '#ffffff';
//     box.style.position = 'absolute';
    
//     // var img = document.createElement('img');
//     // img.src = 'https://i.imgur.com/sohWhy9.png';
//     // // debugger
//     // img.style.width = '100%';
//     // img.style.height = '100%';
//     // img.style.position = 'absolute';
//     // box.appendChild(img);
    
//     const blah = window.formattedDifferences[0][0][0];
//     const white = document.createElement('div')
//     white.style.width = '100%';
//     white.style.height = '100%';
//     white.style.position = 'absolute';
//     white.style.background = 'white';
//     white.innerHTML = blah;
//     box.appendChild(white);
    
//     d3.json("locations.json", function(data) {
//       console.log(data); // this is your data
//   });

//     this.box_ = box;
//     const panes = this.getPanes();
//     panes.overlayLayer.appendChild(box);
//     // debugger
    
//   }

//   this.draw = function() {

//     let overlayProjection = this.getProjection();

//     let sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
//     let ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

//     let box = this.box_;
//     box.style.left = sw.x + 'px';
//     box.style.top = ne.y + 'px';
//     box.style.width = (ne.x - sw.x) + 'px';
//     box.style.height = (sw.y - ne.y) + 'px';
//   }
  
//   this.onRemove = function() {
//     this.box_.parentNode.removeChild(this.box_);
//     this.box_ = null;
//   }

//   this.hide = function() {
//     if (this.box_) {
//       // The visibility property must be a string enclosed in quotes.
//       this.box_.style.visibility = 'hidden';
//     }
//   };

//   this.show = function() {
//     if (this.box_) {
//       this.box_.style.visibility = 'visible';
//     }
//   };

//   this.toggle = function() {
//     if (this.box_) {
//       if (this.box_.style.visibility === 'hidden') {
//         this.show();
//       } else {
//         this.hide();
//       }
//     }
//   };

//   this.toggleDOM = function() {
//     if (this.getMap()) {
//       // Note: setMap(null) calls OverlayView.onRemove()
//       this.setMap(null);
//     } else {
//       this.setMap(this.map_);
//     }
//   };
// }


d3.json("locations.json").then(function(data){
  
  console.log(data);
  overlay.onAdd = function() {
    let layer = d3.select(this.getPanes().overlayLayer).append("div").attr("class", "stations");
    
    overlay.draw = function() {
      const projection = this.getProjection(),
      padding = 10;

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
        .attr("class", "marker");

      marker.append('circle')
        .attr('r', 8)
        .attr('cx', padding)
        .attr('cy', padding);

      marker.append("text")
        .attr("x", padding + 7)
        .attr("y", padding)
        .attr("dy", ".31em")
        .text(function(d) {return d.value.stationCode});
    
      function transform(d) {
        console.log(d);
        d = new google.maps.LatLng(d.value.latitude, d.value.longitude);
        // debugger
        d = projection.fromLatLngToDivPixel(d);
        return d3.select(this)
          .style("left", (d.x - padding) + "px")
          .style("top", (d.y - padding) + "px");
      }
    };
  };
  overlay.setMap(map);
})


