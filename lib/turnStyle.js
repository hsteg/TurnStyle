import { makeRequest } from './dataParse';
import UIControls from './ui_controls';


class TurnStyle {
  constructor() {
    this.data = [];
    this.uIControls = new UIControls();
  }

  loadData() {
    this.addPlayControls();
    makeRequest().then(data => this.handleData(data));
  }
  
  handleData(data) {
    this.data = data;
    this.removeLoading();
  }
  
  removeLoading() {
    const loadingText = document.getElementById('start-animation-text');
    loadingText.textContent = "Start Animation";
    this.uIControls.addStartButton(this.data);
  }
  
  addPlayControls() {
    this.uIControls.initPlayControls();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded");
  const turnStyle = new TurnStyle();
  turnStyle.loadData();
})




