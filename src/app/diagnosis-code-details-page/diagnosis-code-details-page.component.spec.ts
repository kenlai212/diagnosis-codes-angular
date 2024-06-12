import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisCodeDetailsPageComponent } from './diagnosis-code-details-page.component';

describe('DiagnosisCodeDetailsPageComponent', () => {
  let component: DiagnosisCodeDetailsPageComponent;
  let fixture: ComponentFixture<DiagnosisCodeDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosisCodeDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisCodeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
