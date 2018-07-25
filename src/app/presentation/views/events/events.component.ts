import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-public',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('EventsComponent!!')
  }
}
