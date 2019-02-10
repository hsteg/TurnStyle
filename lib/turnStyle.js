import {makeRequest} from './dataParse';


class TurnStyle {
  constructor() {
    this.data = {};
  }

  loadData() {
    const loadingText = document.getElementById('loading');
    const playControls = document.getElementById('play-controls');
    const dataDiv = document.getElementById('data');
    makeRequest().then(data => this.handleData(data, loadingText, playControls, dataDiv));
  }

  handleData(data, load, play, dataDiv) {
    this.data = data;
    load.style.display = 'none';
    play.style.display = 'block';
    dataDiv.innerHTML = this.data[0];
  }
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded");
  // window.turnStyle = new TurnStyle();
  const turnStyle = new TurnStyle();
  turnStyle.loadData();
})




