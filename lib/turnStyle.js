import {makeRequest} from './dataParse';
import MapOverlay from './map_data_overlay';


class TurnStyle {
  constructor() {
    this.data = [];
  }

  loadData() {
    makeRequest().then(data => this.handleData(data));
  }

  handleData(data) {
    this.data = data;
    this.removeLoading();
    this.addPlayControls();
    window.turnData = this.data;
  }

  removeLoading() {
    const loadingText = document.getElementById('loading');
    loadingText.style.display = 'none';
  }

  addPlayControls() {
    const mapOverlay = new MapOverlay();
    const playControlsDiv = document.getElementById('play-controls');
    const controlBar = document.createElement('button');
    controlBar.innerHTML = 'clickme';
    controlBar.onclick = () => {mapOverlay.addNewCircles(this.data)};
    playControlsDiv.appendChild(controlBar);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded");
  const turnStyle = new TurnStyle();
  turnStyle.loadData();
})




