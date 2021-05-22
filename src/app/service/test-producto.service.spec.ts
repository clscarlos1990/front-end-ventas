import { TestBed } from '@angular/core/testing';

import { TestProductoService } from './test-producto.service';

describe('TestProductoService', () => {
  let service: TestProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
