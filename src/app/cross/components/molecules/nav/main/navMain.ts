import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-nav-main',
  templateUrl: './navMain.html',
  styleUrls: ['./navMain.scss']
})
export class NavMain implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('Nav!!')
  }
}
