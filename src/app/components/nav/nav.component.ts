import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // @Input() menuIsTouched: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  /*
  menuTouched() {
    this.menuIsTouched = !this.menuIsTouched;
    console.log(this.menuIsTouched);
  }
  */

}
