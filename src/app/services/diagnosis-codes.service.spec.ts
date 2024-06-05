import { TestBed } from '@angular/core/testing';

import { DiagnosisCodesService } from './diagnosis-codes.service';

describe('DiagnosisCodesService', () => {
  let service: DiagnosisCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosisCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
