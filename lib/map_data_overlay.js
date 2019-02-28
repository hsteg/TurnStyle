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

    let stationLayer = d3.select(".stations");

    let i = 0;
    let timelineCircles;

    let interval = setInterval(() => {

      if (i === 40) {
        // let seasonSelections = document.querySelectorAll('.date-selection');
        // let seasonCircles = document.querySelectorAll('.date-circle');
        // for (let i = 0; i < seasonSelections.length; i++) {
        //   seasonSelections[i].style.fill = "#777777";
        //   seasonCircles[i].style.fill = "#ffffff";
        // }
        this.setActiveTimelineDate(40);
        clearInterval(interval);
        return;
      }

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

      i++;
    }, 2300);

  }

  setActiveTimelineDate(active) {
    let inactiveCircles = document.querySelectorAll(".ui-timeline-circle");
    let inactiveText = document.querySelectorAll(".timeline-text");
    let inactiveTimeText = document.querySelectorAll(".timeline-text-time");

    for (let i = 0; i < inactiveCircles.length; i++) {
      inactiveCircles[i].style.fill = "white";
      inactiveText[i].style.fill = "#777777";
      inactiveTimeText[i].textContent = "";
    }

    switch (active) {
      case 0:
        this.changeTimelineTextColors("#timeline-text-saturday",
          "#timeline-text-time-saturday", "4:00AM - 8:00AM", "#timeline-saturday");
        break;
      case 1:
        this.changeTimelineTextColors("#timeline-text-saturday",
          "#timeline-text-time-saturday", "8:00AM - 12:00PM", "#timeline-saturday");
        break;
      case 2:
        this.changeTimelineTextColors("#timeline-text-saturday",
          "#timeline-text-time-saturday", "12:00PM - 4:00PM", "#timeline-saturday");
        break;
      case 3:
        this.changeTimelineTextColors("#timeline-text-saturday",
          "#timeline-text-time-saturday", "4:00PM - 8:00PM", "#timeline-saturday");
        break;
      case 4:
        this.changeTimelineTextColors("#timeline-text-saturday",
          "#timeline-text-time-saturday", "8:00PM - 12:00AM", "#timeline-saturday");
        break;
      case 5:
        this.changeTimelineTextColors("#timeline-text-sunday",
          "#timeline-text-time-sunday", "12:00AM - 4:00AM", "#timeline-sunday");
        break;
      case 6:
        this.changeTimelineTextColors("#timeline-text-sunday",
          "#timeline-text-time-sunday", "4:00AM - 8:00AM", "#timeline-sunday");
        break;
      case 7:
        this.changeTimelineTextColors("#timeline-text-sunday",
          "#timeline-text-time-sunday", "8:00AM - 12:00PM", "#timeline-sunday");
        break;
      case 8:
        this.changeTimelineTextColors("#timeline-text-sunday",
          "#timeline-text-time-sunday", "12:00PM - 4:00PM", "#timeline-sunday");
        break;
      case 9:
        this.changeTimelineTextColors("#timeline-text-sunday",
          "#timeline-text-time-sunday", "4:00PM - 8:00PM", "#timeline-sunday");
        break;
      case 10:
        this.changeTimelineTextColors("#timeline-text-sunday",
          "#timeline-text-time-sunday", "8:00PM - 12:00AM", "#timeline-sunday");
        break;
      case 11:
        this.changeTimelineTextColors("#timeline-text-monday",
          "#timeline-text-time-monday", "12:00AM - 4:00AM", "#timeline-monday");
        break;
      case 12:
        this.changeTimelineTextColors("#timeline-text-monday",
          "#timeline-text-time-monday", "4:00AM - 8:00AM", "#timeline-monday");
        break;
      case 13:
        this.changeTimelineTextColors("#timeline-text-monday",
          "#timeline-text-time-monday", "8:00AM - 12:00PM", "#timeline-monday");
        break;
      case 14:
        this.changeTimelineTextColors("#timeline-text-monday",
          "#timeline-text-time-monday", "12:00PM - 4:00PM", "#timeline-monday");
        break;
      case 15:
        this.changeTimelineTextColors("#timeline-text-monday",
          "#timeline-text-time-monday", "4:00PM - 8:00PM", "#timeline-monday");
        break;
      case 16:
        this.changeTimelineTextColors("#timeline-text-monday",
          "#timeline-text-time-monday", "8:00PM - 12:00AM", "#timeline-monday");
        break;
      case 17:
        this.changeTimelineTextColors("#timeline-text-tuesday",
          "#timeline-text-time-tuesday", "12:00AM - 4:00AM", "#timeline-tuesday");
        break;
      case 18:
        this.changeTimelineTextColors("#timeline-text-tuesday",
          "#timeline-text-time-tuesday", "4:00AM - 8:00AM", "#timeline-tuesday");
        break;
      case 19:
        this.changeTimelineTextColors("#timeline-text-tuesday",
          "#timeline-text-time-tuesday", "8:00AM - 12:00PM", "#timeline-tuesday");
        break;
      case 20:
        this.changeTimelineTextColors("#timeline-text-tuesday",
          "#timeline-text-time-tuesday", "12:00PM - 4:00PM", "#timeline-tuesday");
        break;
      case 21:
        this.changeTimelineTextColors("#timeline-text-tuesday",
          "#timeline-text-time-tuesday", "4:00PM - 8:00PM", "#timeline-tuesday");
        break;
      case 22:
        this.changeTimelineTextColors("#timeline-text-tuesday",
          "#timeline-text-time-tuesday", "8:00PM - 12:00AM", "#timeline-tuesday");
        break;
      case 23:
        this.changeTimelineTextColors("#timeline-text-wednesday",
          "#timeline-text-time-wednesday", "12:00AM - 4:00AM", "#timeline-wednesday");
        break;
      case 24:
        this.changeTimelineTextColors("#timeline-text-wednesday",
          "#timeline-text-time-wednesday", "4:00AM - 8:00AM", "#timeline-wednesday");
        break;
      case 25:
        this.changeTimelineTextColors("#timeline-text-wednesday",
          "#timeline-text-time-wednesday", "8:00AM - 12:00PM", "#timeline-wednesday");
        break;
      case 26:
        this.changeTimelineTextColors("#timeline-text-wednesday",
          "#timeline-text-time-wednesday", "12:00PM - 4:00PM", "#timeline-wednesday");
        break;
      case 27:
        this.changeTimelineTextColors("#timeline-text-wednesday",
          "#timeline-text-time-wednesday", "4:00PM - 8:00PM", "#timeline-wednesday");
        break;
      case 28:
        this.changeTimelineTextColors("#timeline-text-wednesday",
          "#timeline-text-time-wednesday", "8:00PM - 12:00AM", "#timeline-wednesday");
        break;
      case 29:
        this.changeTimelineTextColors("#timeline-text-thursday",
          "#timeline-text-time-thursday", "12:00AM - 4:00AM", "#timeline-thursday");
        break;
      case 30:
        this.changeTimelineTextColors("#timeline-text-thursday",
          "#timeline-text-time-thursday", "4:00AM - 8:00AM", "#timeline-thursday");
        break;
      case 31:
        this.changeTimelineTextColors("#timeline-text-thursday",
          "#timeline-text-time-thursday", "8:00AM - 12:00PM", "#timeline-thursday");
        break;
      case 32:
        this.changeTimelineTextColors("#timeline-text-thursday",
          "#timeline-text-time-thursday", "12:00PM - 4:00PM", "#timeline-thursday");
        break;
      case 33:
        this.changeTimelineTextColors("#timeline-text-thursday",
          "#timeline-text-time-thursday", "4:00PM - 8:00PM", "#timeline-thursday");
        break;
      case 34:
        this.changeTimelineTextColors("#timeline-text-thursday",
          "#timeline-text-time-thursday", "8:00PM - 12:00AM", "#timeline-thursday");
        break;
      case 35:
        this.changeTimelineTextColors("#timeline-text-friday",
          "#timeline-text-time-friday", "12:00AM - 4:00AM", "#timeline-friday");
        break;
      case 36:
        this.changeTimelineTextColors("#timeline-text-friday",
          "#timeline-text-time-friday", "4:00AM - 8:00AM", "#timeline-friday");
        break;
      case 37:
        this.changeTimelineTextColors("#timeline-text-friday",
          "#timeline-text-time-friday", "8:00AM - 12:00PM", "#timeline-friday");
        break;
      case 38:
        this.changeTimelineTextColors("#timeline-text-friday",
          "#timeline-text-time-friday", "12:00PM - 4:00PM", "#timeline-friday");
        break;
      case 39:
        this.changeTimelineTextColors("#timeline-text-friday",
          "#timeline-text-time-friday", "4:00PM - 8:00PM", "#timeline-friday");
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

  changeTimelineTextColors(dayElement, timeElement, time, circleElement) {
    let textDay = document.querySelector(dayElement);
    textDay.style.fill = "black";
    let textTime = document.querySelector(timeElement);
    textTime.textContent = time;
    let circleDay = document.querySelector(circleElement);
    circleDay.style.fill = "black";
  }

}

export default MapDataOverlay;

