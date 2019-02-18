import MapDataOverlay from './map_data_overlay';

class UIControls {
  constructor() {
  }

  initPlayControls(data) {
    const mapDataOverlay = new MapDataOverlay();

    d3.select('#ui-controls').append("svg").attr("id", "svg-container")

    let whiteBox = d3.select("#svg-container")
      .attr("width", '100%')
      // .attr("height", '100%')
      .style('background-color', '#f2e9d4');

    //6 line
    whiteBox.append('line')
      .style("stroke-width", 10)
      .style("stroke", "#1ba057")
      .attr("x1", 510)
      .attr("y1", 0)
      .attr("x2", 510)
      .transition().duration(2000)
      .attr("y2", 1000);

    // whiteBox.append('path')
    // .style("stroke", "#1ba057")
    // .style("fill", "transparent")
    // .style("stroke-width", 10)
    // .attr("d", "M 540 0 C 540 95 500 35 500 500 C 545 745 525 810 530 1000");

    //7th ave line
    whiteBox.append('line')
      .style("stroke", "#ec3243")
      .style("stroke-width", 10)
      .attr("x1", 200)
      .attr("y1", 0)
      .attr("x2", 200)
      .transition().duration(2000)
      .attr("y2", 1000);

    //8th ave line
    whiteBox.append('path')
      .style("stroke-width", 10)
      .style("fill", "transparent")
      .style("stroke", "transparent")
      .transition().duration(2000)
      .style("stroke", "#0d68b6")
      .attr("d", "M 75 0 L 75 500 C 75 600 320 520 340 630 L 340 1000");

    // whiteBox.append('path')
    //   .style("stroke", "#f38022")
    //   .style("stroke-width", 10)
    //   .style("fill", "transparent")
    //   .attr("d", "M 350 0 L 350 640 Q 350 680 775 680");

    //6th ave line
    whiteBox.append('line')
      .style("stroke", "#f38022")
      .style("stroke-width", 10)
      .attr("x1", 350)
      .attr("y1", 0)
      .attr("x2", 350)
      .transition().duration(2000)
      .attr("y2", 1000);


    // broadway line
    whiteBox.append('path')
      .style("fill", "transparent")
      .style("stroke-width", 10)
      .style("stroke", "transparent")
      .transition().duration(2000)
      .style("stroke", "#fed623")
      .attr("d", "M 210 0 C 210 140 500 310 490 500 L 490 1000");

    //l train line
    whiteBox.append('line')
      .style("stroke", "#939598")
      .style("stroke-width", 10)
      .attr("x1", 0)
      .attr("y1", 500)
      .attr("y2", 500)
      .transition().duration(2000)
      .attr("x2", 1000);

    //herald sq circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 350)
      .attr("r", 12)
      .on("click", () => mapDataOverlay.addNewCircles(data))
      .transition().duration(2000)
      .attr("cy", 227)
      .attr("class", "ui-circle-link");

    whiteBox.append("text")
      .attr("x", 365)
      .on("click", () => mapDataOverlay.addNewCircles(data))
      .transition().duration(2000)
      .attr("y", 233)
      .text("Start Animation")
      .attr("class", "ui-link");


    //8th 14th circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 75)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 500)
      .attr("class", "ui-circle-link");

    whiteBox.append("a")
      .attr("xlink:href", "http://dev.harrisonsteg.com")
      .append("svg")
      .append('circle')
      .attr("cx", 75)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 100)
      .attr("class", "ui-circle-link");

    whiteBox.append("a")
      .attr("xlink:href", "http://linkedin.com/in/hsteg")
      .append("svg")
      .append('circle')
      .attr("cx", 75)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 225)
      .attr("class", "ui-circle-link");

    whiteBox.append("a")
      .attr("xlink:href", "http://github.com/hsteg")
      .append("svg")
      .append('circle')
      .attr("cx", 75)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 350)
      .attr("class", "ui-circle-link");

    whiteBox.append("a")
      .attr("xlink:href", "http://dev.harrisonsteg.com")
      .append("text")
      .attr("class", "ui-link")
      .attr("x", 90)
      .transition().duration(2000)
      .attr("y", 106)
      .text("Contact");

    whiteBox.append("a")
      .attr("xlink:href", "http://linkedin.com/in/hsteg")
      .append("text")
      .attr("class", "ui-link")
      .attr("x", 90)
      .transition().duration(2000)
      .attr("y", 231)
      .text("LinkedIn");

    whiteBox.append("a")
      .attr("xlink:href", "http://github.com/hsteg")
      .append("text")
      .attr("class", "ui-link")
      .attr("x", 90)
      .transition().duration(2000)
      .attr("y", 356)
      .text("GitHub");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 510)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 50)
      .attr("id", "timeline-saturday")
      .attr("class", "ui-circle");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 56)
      .attr("id", "timeline-text-saturday")
      .attr("class", "timeline-text")
      .text("Saturday");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 75)
      .attr("id", "timeline-text-time-saturday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 510)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 125)
      .attr("id", "timeline-sunday")
      .attr("class", "ui-circle");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 131)
      .attr("id", "timeline-text-sunday")
      .attr("class", "timeline-text")
      .text("Sunday")

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 150)
      .attr("id", "timeline-text-time-sunday")
      .attr("class", "timeline-text-time");


    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 510)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 200)
      .attr("id", "timeline-monday")
      .attr("class", "ui-circle");

    whiteBox.append("text")
      .attr("class", "timeline-text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 206)
      .attr("id", "timeline-text-monday")
      .text("Monday");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 225)
      .attr("id", "timeline-text-time-monday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 510)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 275)
      .attr("id", "timeline-tuesday")
      .attr("class", "ui-circle");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 281)
      .attr("id", "timeline-text-tuesday")
      .attr("class", "timeline-text")
      .text("Tuesday");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 300)
      .attr("id", "timeline-text-time-tuesday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 510)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 350)
      .attr("id", "timeline-wednesday")
      .attr("class", "ui-circle");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 356)
      .attr("id", "timeline-text-wednesday")
      .attr("class", "timeline-text")
      .text("Wednesday");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 375)
      .attr("id", "timeline-text-time-wednesday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 510)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 425)
      .attr("id", "timeline-thursday")
      .attr("class", "ui-circle");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 431)
      .attr("id", "timeline-text-thursday")
      .attr("class", "timeline-text")
      .text("Thursday");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 450)
      .attr("id", "timeline-text-time-thursday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 510)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 500)
      .attr("id", "timeline-friday")
      .attr("class", "ui-circle");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 520)
      .attr("id", "timeline-text-friday")
      .attr("class", "timeline-text")
      .text("Friday");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 539)
      .attr("id", "timeline-text-time-friday")
      .attr("class", "timeline-text-time");

  }
}

export default UIControls;