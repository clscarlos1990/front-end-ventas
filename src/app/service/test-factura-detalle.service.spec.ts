import { TestBed } from '@angular/core/testing';

import { TestFacturaDetalleService } from './test-factura-detalle.service';

describe('TestFacturaDetalleService', () => {
  let service: TestFacturaDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestFacturaDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
