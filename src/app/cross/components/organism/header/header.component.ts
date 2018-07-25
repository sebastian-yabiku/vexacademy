import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class Header implements OnInit {
  constructor() {
  }
  ngOnInit() {
    console.log('Header!!')
  }
}
