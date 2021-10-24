import { TestBed } from '@angular/core/testing';

import { BackGaurdService } from './back-gaurd.service';

describe('BackGaurdService', () => {
  let service: BackGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
