import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  template: `
    <img *ngIf="icon" src="https://openweathermap.org/img/wn/{{icon}}@2x.png" alt="img weather" />
  `,
})
export class ImgComponent implements OnInit {
  @Input() public icon: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
