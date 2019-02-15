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

    whiteBox.append('line')
      .style("stroke", "#1ba057")
      .style("stroke-width", 10)
      .attr("x1", 510)
      .attr("y1", 0)
      .attr("x2", 510)
      .attr("y2", 1000);

      // whiteBox.append('path')
      // .style("stroke", "#1ba057")
      // .style("fill", "transparent")
      // .style("stroke-width", 10)
      // .attr("d", "M 540 0 C 540 95 500 35 500 500 C 545 745 525 810 530 1000");

    whiteBox.append('line')
      .style("stroke", "#ec3243")
      .style("stroke-width", 10)
      .attr("x1", 200)
      .attr("y1", 0)
      .attr("x2", 200)
      .attr("y2", 1000);

    whiteBox.append('path')
      .style("stroke", "#0d68b6")
      .style("stroke-width", 10)
      .style("fill", "transparent")
      .attr("d", "M 75 0 L 75 500 C 75 600 320 520 340 630 L 340 1000");

    // whiteBox.append('path')
    //   .style("stroke", "#f38022")
    //   .style("stroke-width", 10)
    //   .style("fill", "transparent")
    //   .attr("d", "M 350 0 L 350 640 Q 350 680 775 680");


      whiteBox.append('line')
      .style("stroke", "#f38022")
      .style("stroke-width", 10)
      .attr("x1", 350)
      .attr("y1", 0)
      .attr("x2", 350)
      .attr("y2", 1000);

      

    whiteBox.append('path')
      .style("stroke", "#fed623")
      .style("fill", "transparent")
      .style("stroke-width", 10)
      .attr("d", "M 210 0 C 210 140 500 310 490 500 L 490 1000");

    whiteBox.append('line')
      .style("stroke", "#939598")
      .style("stroke-width", 10)
      .attr("x1", 0)
      .attr("y1", 500)
      .attr("x2", 1000)
      .attr("y2", 500);


    whiteBox.append("svg").append('circle')
      .attr("cx", 75)
      .attr("cy", 500)
      .attr("r", 12)
      .style("fill", "white")
      .style("stroke", "black")
      .style("stroke-width", 3);

    whiteBox.append("svg").append('button').text("asdfasdf").attr('height', 400).attr('width', 40);





  }
}

export default UIControls;