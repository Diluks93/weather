import { TestBed } from '@angular/core/testing';

import { StormGlassInterceptor } from './storm-glass.interceptor';

describe('StormGlassInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StormGlassInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StormGlassInterceptor = TestBed.inject(StormGlassInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
