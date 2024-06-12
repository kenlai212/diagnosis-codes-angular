import { Component, OnInit } from '@angular/core';
import { DiagnosisCodesService } from '../services/diagnosis-codes.service';

@Component({
  selector: 'app-search-diagnosis-codes-page',
  templateUrl: './search-diagnosis-codes-page.component.html',
  styleUrls: ['./search-diagnosis-codes-page.component.scss']
})
export class SearchDiagnosisCodesPageComponent implements OnInit {

  constructor(
    private diagnosisCodesService: DiagnosisCodesService
  ) { }

  diagnosisCodesList: any;
  currentPageNumber = 0;

  ngOnInit(): void {
    this.diagnosisCodesService.searchDiagnosisCodes(this.currentPageNumber).subscribe(response => {
      this.diagnosisCodesList = response.diagnosisCodes; 
    });
  }

  next(){
    this.currentPageNumber++;
    this.diagnosisCodesService.searchDiagnosisCodes(this.currentPageNumber).subscribe(response => {
      this.diagnosisCodesList = response.diagnosisCodes; 
    });
  }

  previous(){
    if(this.currentPageNumber > 0)
    this.currentPageNumber--;

    this.diagnosisCodesService.searchDiagnosisCodes(this.currentPageNumber).subscribe(response => {
      this.diagnosisCodesList = response.diagnosisCodes; 
    });
  }
}
