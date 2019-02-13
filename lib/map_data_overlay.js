class MapDataOverlay {
  constructor() {

  }

  addNewCircles(data) {
    let flatData = [];
    let stationKeys = Object.keys(data);

    for (let i = 0; i < 40; i++) {
      let stationChunks = [];
      for (let j = 0; j < stationKeys.length; j++) {
        // checking below here to make sure I have full data, currently disreagarding any non full data sets, approx 6/450 stations meet this criteria
        if (data[stationKeys[j]].length !== 40) { continue; }
        stationChunks.push({ stationCode: stationKeys[j], stationName: data[stationKeys[j]][i][1], date: data[stationKeys[j]][i][2], time: data[stationKeys[j]][i][3], diff: data[stationKeys[j]][i][4] - data[stationKeys[j]][i][5] });
      }
      flatData.push(stationChunks);
    }

    console.log(flatData);

    let stationLayer = d3.select(".stations");

    
    let i = 0;
    // let newestData = flatData[i];
    
    let interval = setInterval(() => {
      let newestData = flatData[i];
      
      for (let k = 0; k < newestData.length; k++) {
        let marker = stationLayer.select(`#${newestData[k].stationCode}`);
        let numCircles = this.numCirclesToGenerate(newestData[k].diff);

        for (let j = 0; j < numCircles; j++) {
          newestData[k].diff >= 0 ? this.generateEntrance(marker) : this.generateExit(marker);
        }
      }
      console.log(i);
      if (i === 39) { clearInterval(interval); }
      i++;
    }, 2300);

  }

  generateExit(marker) {
    marker.append("circle")
      .attr("id", "circ")
      .attr("cx", 50)
      .attr("cy", 50)
      .style('fill', 'transparent')
      .transition().duration(Math.random() * 1000)
      .attr("r", 3 + "px")
      .transition().on("end", function () {
        d3.select(this)
          .style('fill', 'red')
          .transition().duration(1000)
          .attr("cx", Math.random() * 200)
          .attr("cy", Math.random() * 200)
          .style("opacity", .6)
          .on("end", function () {
            d3.select(this).remove();
          });
      });
  }

  generateEntrance(marker) {
    this.chooseWall(marker);
  }

  chooseWall(marker) {
    let startWallNum = Math.floor(Math.random() * 3);

    switch (startWallNum) {
      case 0:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", Math.floor(Math.random() * 97))
          .attr("cy", 3)
          .style('fill', 'transparent')
          .transition().duration(Math.random() * 1000)
          .attr("r", 3 + "px")
          .transition().on("end", function () {
            entranceTransition(this)
          });

      case 1:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", 97)
          .attr("cy", Math.floor(Math.random() * 97))
          .style('fill', 'transparent')
          .transition().duration(Math.random() * 1000)
          .attr("r", 3 + "px")
          .transition().on("end", function () {
            entranceTransition(this)
          });

      case 2:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", 3)
          .attr("cy", Math.floor(Math.random() * 97))
          .style('fill', 'transparent')
          .transition().duration(Math.random() * 1000)
          .attr("r", 3 + "px")
          .transition().on("end", function () {
            entranceTransition(this)
          });

      case 3:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", Math.floor(Math.random() * 97))
          .attr("cy", 97)
          .style('fill', 'transparent')
          .transition().duration(Math.random() * 1000)
          .attr("r", 3 + "px")
          .transition().on("end", function () {
            entranceTransition(this)
          });
    }

    function entranceTransition(svg) {
      d3.select(svg)
        .style('fill', 'green')
        .transition().duration(1000)
        .attr("cx", 50)
        .attr("cy", 50)
        .style("opacity", .6)
        .on("end", function () {
          d3.select(svg).remove();
        });
    }
  }

  numCirclesToGenerate(difference) {
    let nonNegDifference = difference < 0 ? difference * -1 : difference;
    if (nonNegDifference > 15000) { return 3; }
    let numCircles = nonNegDifference / 250;
    return numCircles;
  }

}

export default MapDataOverlay

