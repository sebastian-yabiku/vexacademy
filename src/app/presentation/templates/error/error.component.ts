import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    error!!
  `,
  styles: []
})
export class ErrorComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('ERROR!!')
  }
}
