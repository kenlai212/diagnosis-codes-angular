import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDiagnosisCodesPageComponent } from './search-diagnosis-codes-page.component';

describe('SearchDiagnosisCodesPageComponent', () => {
  let component: SearchDiagnosisCodesPageComponent;
  let fixture: ComponentFixture<SearchDiagnosisCodesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDiagnosisCodesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDiagnosisCodesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
