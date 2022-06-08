import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Directive({
  selector: '[appMainBackground]'
})
export class MainBackgroundDirective {
  @Input('appMainBackground')
  public typeWeather?: string;

  constructor(private element: ElementRef, private renderer: Renderer2, private weatherService: WeatherService) { }

  public ngOnChanges() {
    this.setBackground();
  }

  private setBackground(): void {
    const data = this.weatherService.getPictureUrl(this.typeWeather as string);

    data.subscribe((url: any) => {
      this.renderer.setStyle(this.element.nativeElement, 'background-image', `url(${url.urls.full})`);
      this.renderer.setStyle(this.element.nativeElement.parentElement, 'background-image', `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${url.urls.full})`);
    });
  }
}
