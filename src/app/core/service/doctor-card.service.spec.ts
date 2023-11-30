import { TestBed } from '@angular/core/testing';

import { DoctorCardService } from './doctor-card.service';

describe('DoctorCardService', () => {
  let service: DoctorCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
