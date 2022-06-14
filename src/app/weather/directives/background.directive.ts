import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  @Input('appBackground')
  public typeWeather?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  public ngOnChanges() {
    this.setBackground();
  }

  private setBackground(): void {
    const color = this.checkTypeWeather(this.typeWeather as string);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

  private checkTypeWeather(type: string): string {
    let color = '';
    switch (type) {
      case 'Thunderstorm':
        return color = 'rgba(47,255,0,0.4)';
      case 'Drizzle':
        return color = 'rgba(0,0,0,0.6)';
      case 'Rain':
        return color = 'rgba(0,0,0,0.8)';
      case 'Snow':
        return color = 'rgba(255,255,255,0.2)';
      case 'Clear':
        return color = 'rgba(2,100,100,0.5)';
      case 'Clouds':
        return color = 'rgba(70,163,94,0.8)';
      case 'Atmosphere':
        return color = 'rgba(255,98,165,0.5)';
      default:
        return color = 'rgba(67,150,71,0.7)';
    }
  }

}
