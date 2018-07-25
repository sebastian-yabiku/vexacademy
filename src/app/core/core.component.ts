import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['../../assets/styles/main.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
