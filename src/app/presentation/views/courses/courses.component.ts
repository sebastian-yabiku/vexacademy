import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-public',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('CoursesComponent!!')
  }
}
