import { makeRequest } from './dataParse';
import UIControls from './ui_controls';


class TurnStyle {
  constructor() {
    this.data = [];
    this.uIControls = new UIControls();
  }

  // loadData() {
  //   this.addPlayControls();
  //   makeRequest("https://raw.githubusercontent.com/hsteg/TurnStyle/master/data/turnstile_190126.txt").then(data => this.handleData(data));
  // }
  
  // handleData(data) {
  //   this.data = data;
  //   this.removeLoading();
  // }
  
  // removeLoading() {
  //   this.uIControls.addStartButton(this.data);
  // }
  
  addPlayControls() {
    this.uIControls.initPlayControls();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded");
  const turnStyle = new TurnStyle();
  turnStyle.addPlayControls();
})




