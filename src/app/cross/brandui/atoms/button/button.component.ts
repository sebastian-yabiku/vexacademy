import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class BranduiBtn implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('BranduiBtn!!')
  }
}
