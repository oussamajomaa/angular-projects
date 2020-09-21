import { TestBed } from '@angular/core/testing';

import { AyaService } from './aya.service';

describe('AyaService', () => {
  let service: AyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
