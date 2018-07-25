import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-public',
  templateUrl: './weAre.component.html',
  styleUrls: ['./weAre.component.scss']
})
export class WeAreComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('WeAreComponent!!')
  }
}
