import { TestBed, inject } from '@angular/core/testing';

import { InmuebleServService } from './inmueble-serv.service';

describe('InmuebleServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InmuebleServService]
    });
  });

  it('should be created', inject([InmuebleServService], (service: InmuebleServService) => {
    expect(service).toBeTruthy();
  }));
});
