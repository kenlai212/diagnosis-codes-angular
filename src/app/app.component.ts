import { Component, OnInit } from '@angular/core';
import { DiagnosisCodesService } from './services/diagnosis-codes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private diagnosisCodesService: DiagnosisCodesService
  ){}

  title = 'Diagnosis Code';
  diagnosisCodesList: any;
  currentPageNumber = 0;

  ngOnInit(){
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
