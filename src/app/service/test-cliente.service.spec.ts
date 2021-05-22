import { TestBed } from '@angular/core/testing';

import { TestClienteService } from './test-cliente.service';

describe('TestClienteService', () => {
  let service: TestClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
