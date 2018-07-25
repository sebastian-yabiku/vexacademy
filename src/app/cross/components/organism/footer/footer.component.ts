import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class Footer implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('Nav!!')
  }
}
