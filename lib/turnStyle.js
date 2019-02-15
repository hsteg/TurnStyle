import {makeRequest} from './dataParse';
import UIControls from './ui_controls';


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
    const uIControls = new UIControls();
    uIControls.initPlayControls(this.data);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded");
  const turnStyle = new TurnStyle();
  turnStyle.loadData();
})




