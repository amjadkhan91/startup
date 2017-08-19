import { Component, AfterViewInit, NgZone } from '@angular/core';
declare var jQuery: any;
declare var initFunction: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


  constructor(private _zone: NgZone) {}

  ngAfterViewInit(): void {
    this._zone.run(() => {
      initFunction(jQuery);
    });
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // });
  }
  // title = 'app';
}
