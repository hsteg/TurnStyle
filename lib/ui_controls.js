import MapDataOverlay from './map_data_overlay';

class UIControls {
  constructor() {
    this.mapDataOverlay = new MapDataOverlay();
  }

  initPlayControls() {
    d3.select('#ui-controls').append("svg").attr("id", "svg-container")

    let whiteBox = d3.select("#svg-container")
      .attr("width", '100%')
      // .attr("height", '100%')
      .style('background-color', '#f2e9d4');

    //6 line
    // whiteBox.append('line')
    //   .style("stroke-width", 10)
    //   .style("stroke", "#1ba057")
    //   .attr("x1", 510)
    //   .attr("y1", 0)
    //   .attr("x2", 510)
    //   .transition().duration(2000)
    //   .attr("y2", 1000);

    whiteBox.append('path')
      .style("stroke", "#1ba057")
      .style("fill", "transparent")
      .style("stroke-width", 10)
      .attr("d", "M 540 0 C 540 95 500 35 500 500 C 545 745 525 810 530 1000");


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
      .attr("d", "M 75 0 L 75 500 C 75 600 350 520 350 630 L 350 1000");

    //6th ave line
    whiteBox.append('path')
      .style("stroke", "#f38022")
      .style("stroke-width", 10)
      .style("fill", "transparent")
      .attr("d", "M 350 0 L 350 575 C 350 645 390 650 800 650");

    //6th ave line
    // whiteBox.append('line')
    //   .style("stroke", "#f38022")
    //   .style("stroke-width", 10)
    //   .attr("x1", 350)
    //   .attr("y1", 0)
    //   .attr("x2", 350)
    //   .transition().duration(2000)
    //   .attr("y2", 1000);


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
      .on("click", () => this.mapDataOverlay.addNewCircles(data))
      .transition().duration(2000)
      .attr("cy", 227)
      .attr("class", "ui-circle-link");

    whiteBox.append("text")
      .attr("x", 365)
      .transition().duration(2000)
      .attr("y", 233)
      .text("Loading")
      .attr("class", "ui-link")
      .attr("id", "start-animation-text");

    whiteBox.append("svg").append('circle')
      .attr("cy", 500)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cx", 350)
      .attr("class", "ui-circle");

    d3.select('.left-half-main').append('div')
      .style('position', 'absolute')
      .style('top', '630px')
      .style('background-color', '#f2e9d4')
      .transition().duration(2000)
      .attr('class', 'timeline-text-time')
      .style('left', '365px')
      .style('height', '100px')
      .style('width', '120px')
      .style('display', 'inline')
      .style('background-color', 'transparent')
      .text('Each dot represents 500 people. Green dots are people entering a station, red dots are people leaving a station.');

    //union sq circle
    // whiteBox.append("svg").append('ellipse')
    //   .attr("ry", 12)
    //   .attr("rx", 25)
    //   .attr("cy", 500)
    //   .transition().duration(2000)
    //   .attr("cx", 500)
    //   .attr("class", "ui-circle-link");

    whiteBox.append("svg").append('circle')
      .attr("cx", 495)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 500)
      .attr("class", "ui-circle");

    d3.select('.left-half-main').append('div')
      .style('position', 'absolute')
      .style('top', '630px')
      .style('background-color', '#f2e9d4')
      .transition().duration(2000)
      .attr('class', 'timeline-text-time')
      .style('left', '520px')
      .style('height', '100px')
      .style('width', '120px')
      .style('display', 'inline')
      .style('background-color', 'transparent')
      .text('All data provided by the MTA');

      
      whiteBox.append("a")
      .attr("xlink:href", "mailto:hello@harrisonsteg.com")
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
      
      whiteBox.append("a")
      .attr("xlink:href", "http://dev.harrisonsteg.com")
      .append("text")
      .attr("class", "ui-link")
      .attr("x", 90)
      .transition().duration(2000)
      .attr("y", 490)
      .text("Harrison Steg");
      
      
    //8th 14th circle
    whiteBox.append("a")
      .attr("xlink:href", "http://dev.harrisonsteg.com")
      .append("svg")
      .append('circle')
      .attr("cx", 75)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 500)
      .attr("class", "ui-circle-link");

    whiteBox.append("a")
      .attr("xlink:href", "mailto:hello@harrisonsteg.com")
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

    

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 532)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 60)
      .attr("id", "timeline-saturday")
      .attr("class", "ui-timeline-circle");

    whiteBox.append("text")
      .attr("x", 547)
      .transition().duration(2000)
      .attr("y", 66)
      .attr("id", "timeline-text-saturday")
      .attr("class", "timeline-text")
      .text("Saturday");

    whiteBox.append("text")
      .attr("x", 547)
      .transition().duration(2000)
      .attr("y", 85)
      .attr("id", "timeline-text-time-saturday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 519)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 120)
      .attr("id", "timeline-sunday")
      .attr("class", "ui-timeline-circle");

    whiteBox.append("text")
      .attr("x", 534)
      .transition().duration(2000)
      .attr("y", 126)
      .attr("id", "timeline-text-sunday")
      .attr("class", "timeline-text")
      .text("Sunday")

    whiteBox.append("text")
      .attr("x", 534)
      .transition().duration(2000)
      .attr("y", 145)
      .attr("id", "timeline-text-time-sunday")
      .attr("class", "timeline-text-time");


    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 510)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 180)
      .attr("id", "timeline-monday")
      .attr("class", "ui-timeline-circle");

    whiteBox.append("text")
      .attr("class", "timeline-text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 186)
      .attr("id", "timeline-text-monday")
      .text("Monday");

    whiteBox.append("text")
      .attr("x", 525)
      .transition().duration(2000)
      .attr("y", 205)
      .attr("id", "timeline-text-time-monday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 505)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 240)
      .attr("id", "timeline-tuesday")
      .attr("class", "ui-timeline-circle");

    whiteBox.append("text")
      .attr("x", 520)
      .transition().duration(2000)
      .attr("y", 246)
      .attr("id", "timeline-text-tuesday")
      .attr("class", "timeline-text")
      .text("Tuesday");

    whiteBox.append("text")
      .attr("x", 520)
      .transition().duration(2000)
      .attr("y", 265)
      .attr("id", "timeline-text-time-tuesday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 503)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 300)
      .attr("id", "timeline-wednesday")
      .attr("class", "ui-timeline-circle");

    whiteBox.append("text")
      .attr("x", 518)
      .transition().duration(2000)
      .attr("y", 306)
      .attr("id", "timeline-text-wednesday")
      .attr("class", "timeline-text")
      .text("Wednesday");

    whiteBox.append("text")
      .attr("x", 518)
      .transition().duration(2000)
      .attr("y", 325)
      .attr("id", "timeline-text-time-wednesday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 501)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 360)
      .attr("id", "timeline-thursday")
      .attr("class", "ui-timeline-circle");

    whiteBox.append("text")
      .attr("x", 516)
      .transition().duration(2000)
      .attr("y", 366)
      .attr("id", "timeline-text-thursday")
      .attr("class", "timeline-text")
      .text("Thursday");

    whiteBox.append("text")
      .attr("x", 516)
      .transition().duration(2000)
      .attr("y", 385)
      .attr("id", "timeline-text-time-thursday")
      .attr("class", "timeline-text-time");

    //timeline circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 500)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 420)
      .attr("id", "timeline-friday")
      .attr("class", "ui-timeline-circle");

    whiteBox.append("text")
      .attr("x", 515)
      .transition().duration(2000)
      .attr("y", 426)
      .attr("id", "timeline-text-friday")
      .attr("class", "timeline-text")
      .text("Friday");

    whiteBox.append("text")
      .attr("x", 515)
      .transition().duration(2000)
      .attr("y", 445)
      .attr("id", "timeline-text-time-friday")
      .attr("class", "timeline-text-time");

  }

  addStartButton(data) {
    let buttonElement = document.getElementById('start-animation-text');
    buttonElement.textContent = "Start Animation"
    buttonElement.onclick = () => this.mapDataOverlay.addNewCircles(data);
  }
}

export default UIControls;