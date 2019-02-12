class MapDataOverlay {
  constructor() {

  }

  addNewCircles(data) {
    let flatData = [];
    let stationKeys = Object.keys(data);

    stationKeys.forEach(station => {
      flatData.push({ stationCode: station, diff: data[station][0][2] - data[station][0][3] });
    });

    let stationLayer = d3.select(".stations");

    for (let i = 0; i < flatData.length; i++) {
      let marker = stationLayer.select(`#${flatData[i].stationCode}`)
      let startWallNum = Math.floor(Math.random() * 3);

      flatData[i].diff >= 0 ? this.generateEntrance(marker, startWallNum) : this.generateExit(marker);
    }
  }

  generateExit(marker) {
    marker.append("circle")
      .attr("id", "circ")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", 3 + "px")
      .attr("class", "red-moving-circle")
      .transition().on("end", function () {
        d3.select(this).transition().duration(1000)
          .attr("cx", Math.random() * 200)
          .attr("cy", Math.random() * 200)
          .style("opacity", .6)
          .on("end", function () {
            d3.select(this).remove();
          });
      });
  }

  generateEntrance(marker, startWallNum) {
    this.chooseWall(marker, startWallNum);
  }

  chooseWall(marker, startWallNum) {
    switch (startWallNum) {
      case 0:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", Math.floor(Math.random() * 100))
          .attr("cy", 2)
          .attr("r", 3 + "px")
          .attr("class", "green-moving-circle")
          .transition().on("end", function () {
            d3.select(this).transition().duration(1000)
              .attr("cx", 50)
              .attr("cy", 50)
              .style("opacity", .6)
              .on("end", function () {
                d3.select(this).remove();
              });
          });

      case 1:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", 98)
          .attr("cy", Math.floor(Math.random() * 100))
          .attr("r", 3 + "px")
          .attr("class", "green-moving-circle")
          .transition().on("end", function () {
            d3.select(this).transition().duration(1000)
              .attr("cx", 50)
              .attr("cy", 50)
              .style("opacity", .6)
              .on("end", function () {
                d3.select(this).remove();
              });
          });

      case 2:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", 2)
          .attr("cy", Math.floor(Math.random() * 100))
          .attr("r", 3 + "px")
          .attr("class", "green-moving-circle")
          .transition().on("end", function () {
            d3.select(this).transition().duration(1000)
              .attr("cx", 50)
              .attr("cy", 50)
              .style("opacity", .6)
              .on("end", function () {
                d3.select(this).remove();
              });
          });

      case 3:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", Math.floor(Math.random() * 100))
          .attr("cy", 98)
          .attr("r", 3 + "px")
          .attr("class", "green-moving-circle")
          .transition().on("end", function () {
            d3.select(this).transition().duration(1000)
              .attr("cx", 50)
              .attr("cy", 50)
              .style("opacity", .6)
              .on("end", function () {
                d3.select(this).remove();
              });
          });
    }
  }
}

export default MapDataOverlay

