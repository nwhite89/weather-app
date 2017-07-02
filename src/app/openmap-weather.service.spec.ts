import { TestBed, inject } from '@angular/core/testing';

import { OpenmapWeatherService } from './openmap-weather.service';

describe('OpenmapWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenmapWeatherService]
    });
  });

  it('should be created', inject([OpenmapWeatherService], (service: OpenmapWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
