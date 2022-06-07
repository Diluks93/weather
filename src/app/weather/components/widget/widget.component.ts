import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @Input() public icon: string = '';
  @Input() public temp: number | null = null;
  public weekDay: number = 1;
  public weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() { }

  ngOnInit(): void {
    this.weekDay = this.getWeekDay();
  }

  private getWeekDay(): number {
    return this.weekDay = new Date().getDay();
  }

}
