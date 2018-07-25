import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'view-public',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('letter') el:ElementRef;

  constructor() {
  }

  configTypeJs(element) {
    let options: Object

    options = {
      strings: [
        'Desarrollo Front End',
        'Desarrollo Back End',
        'Desarrollo Mobile',
        'Disenio Web',
        'Disenio UI',
        'Disenio UX',
        'Marketing Digital'
      ],
      typeSpeed: 60,
      backSpeed: 60,
      smartBackspace : false,
      loop: true
    }

    new Typed(element.nativeElement, options)
  }

  ngOnChanges(){
    console.log('ngonchanges')
  }

  ngOnInit() {
    console.log('ngOnInit')
    console.log('this', this.el)
    this.configTypeJs(this.el)
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit()')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()')
  }

  ngAfterViewInit () {
    console.log('ngAfterViewInit')
    // this.configTypeJs(this.el)
    // console.log('this', this.el)
    // Ahora puedes utilizar el componente hijo
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked()')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy()')
  }
}
