import { makeRequest } from './dataParse';
import UIControls from './ui_controls';


class TurnStyle {
  constructor() {
    this.uIControls = new UIControls();
  }
  
  addPlayControls() {
    this.uIControls.initPlayControls();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const turnStyle = new TurnStyle();
  turnStyle.addPlayControls();
})




