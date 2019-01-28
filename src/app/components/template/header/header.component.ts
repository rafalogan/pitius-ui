import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 menuState: boolean;

 @Output() toggleState = new EventEmitter();
 @Output() menuExpand = new EventEmitter();

  constructor() {
    this.menuState = false;
  }

  menuToggle () {
    this.menuState = !this.menuState;
    this.toggleState.emit(this.menuState);
    this.menuExpand.emit(this.menuState);
  }

  ngOnInit() {
  }

}
