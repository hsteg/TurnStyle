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
    let timelineCircles;
    

    let interval = setInterval(() => {
      timelineCircles = document.querySelector(".ui-circle");
      timelineCircles.style.fill = "white";
      let newestData = flatData[i];
      
      for (let k = 0; k < newestData.length; k++) {
        let marker = stationLayer.select(`#${newestData[k].stationCode}`);
        let numCircles = this.numCirclesToGenerate(newestData[k].diff);

        for (let j = 0; j < numCircles; j++) {
          newestData[k].diff >= 0 ? this.generateEntrance(marker) : this.generateExit(marker);
        }
      }

      this.setActiveTimelineDate(i);

      // dataDisplay.innerHTML = i;
      if (i === 39) { 
        this.setActiveTimelineDate(40)
        clearInterval(interval); 
      }
      i++;
    }, 2300);

  }

  setActiveTimelineDate(active) {
    let inactiveCircles = document.querySelectorAll(".ui-circle");
    let inactiveText = document.querySelectorAll(".timeline-text");

    for (let i = 0; i < inactiveCircles.length; i++) {
      inactiveCircles[i].style.fill = "white";
      inactiveText[i].style.fill = "#777777";
    }
    
    let circleDay;
    let textDay;

    switch (active) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        circleDay = document.querySelector("#timeline-saturday");
        circleDay.style.fill = "black";
        textDay = document.querySelector("#timeline-text-saturday");
        textDay.style.fill = "black";
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        circleDay = document.querySelector("#timeline-sunday");
        circleDay.style.fill = "black";
        textDay = document.querySelector("#timeline-text-sunday");
        textDay.style.fill = "black";
        break;
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
        circleDay = document.querySelector("#timeline-monday");
        circleDay.style.fill = "black";
        textDay = document.querySelector("#timeline-text-monday");
        textDay.style.fill = "black";
        break;
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
        circleDay = document.querySelector("#timeline-tuesday");
        circleDay.style.fill = "black";
        textDay = document.querySelector("#timeline-text-tuesday");
        textDay.style.fill = "black";
        break;
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
        circleDay = document.querySelector("#timeline-wednesday");
        circleDay.style.fill = "black";
        textDay = document.querySelector("#timeline-text-wednesday");
        textDay.style.fill = "black";
        break;
      case 29:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
        circleDay = document.querySelector("#timeline-thursday");
        circleDay.style.fill = "black";
        textDay = document.querySelector("#timeline-text-thursday");
        textDay.style.fill = "black";
        break;
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
        circleDay = document.querySelector("#timeline-friday");
        circleDay.style.fill = "black";
        textDay = document.querySelector("#timeline-text-friday");
        textDay.style.fill = "black";
        break;
      default:
        break;
    }
  }

  generateExit(marker) {
    marker.append("circle")
      .attr("id", "circ")
      .attr("cx", 50)
      .attr("cy", 50)
      .style('fill', 'transparent')
      .transition().duration(Math.random() * 1000)
      .attr("r", 2 + "px")
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
          .attr("cy", 2)
          .style('fill', 'transparent')
          .transition().duration(Math.random() * 1000)
          .attr("r", 2 + "px")
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
          .attr("r", 2 + "px")
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
          .attr("r", 2 + "px")
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
          .attr("r", 2 + "px")
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
    let numCircles = nonNegDifference / 500;
    return numCircles;
  }

}

export default MapDataOverlay

