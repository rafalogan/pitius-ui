import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() headerToggle: boolean;

  constructor () {
    this.headerToggle = false;
  }


  onHeaderState(event) {
    this.headerToggle = event;
    console.log(`Classe de expanão do menu: ${this.headerToggle}`);
  }

}
