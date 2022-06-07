import { TestBed } from '@angular/core/testing';

import { UnsplashInterceptor } from './unsplash.interceptor';

describe('UnsplashInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UnsplashInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UnsplashInterceptor = TestBed.inject(UnsplashInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
