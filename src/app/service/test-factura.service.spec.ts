import { TestBed } from '@angular/core/testing';

import { TestFacturaService } from './test-factura.service';

describe('TestFacturaService', () => {
  let service: TestFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
