class MapDataOverlay {
  constructor() {

  }

  addNewCircles(data) {
    let flatData = [];
    let stationKeys = Object.keys(data);

    stationKeys.forEach(station => {
      flatData.push({stationCode: station, diff: data[station][0][2] - data[station][0][3] });
    });

    let stationLayer = d3.select(".stations");
    
    for (let i = 0; i < flatData.length; i++) {
      let marker = stationLayer.select(`#${flatData[i].stationCode}`)
      let fill = flatData[i].diff >= 0 ? 'green' : 'red';
      let radius = flatData[i].diff < 0 ? flatData[i].diff * - 1 : flatData[i].diff;
      let className = flatData[i].diff >= 0 ? 'green-moving-circle' : 'red-moving-circle';
      let numCircles = Math.ceil(radius / 50);
      

      for (let j = 0; j < 3; j++) {
        
        
        marker.append("circle")
          .attr("id", "circ")
            .attr("cx", 50)
            .attr("cy", 50)
            .attr("r", 3 + "px")
            .attr("class", className)
            .transition().on("end", function () {
                myTransf(this);
            });
      
      }

        
        
        
        function myTransf(obj) {
            d3.select(obj).transition().duration(500)
                .attr("cx", Math.random() * 200) // change this to random 2px 
              .attr("cy", Math.random() * 200) // change this to random 2px
               .style("opacity", .6) 
                .on("end", function () {
                  d3.select(this).remove();
            });
        }

      
    }
  }
}

export default MapDataOverlay

