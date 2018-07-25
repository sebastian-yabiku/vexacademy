import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-public',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('CareersComponent!!')
  }
}
