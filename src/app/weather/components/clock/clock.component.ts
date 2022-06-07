import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public now: Date | undefined;
  constructor() { }

  ngOnInit(): void {
    this.now = new Date();
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
}
