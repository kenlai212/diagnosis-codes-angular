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

  ngOnInit(){
    this.diagnosisCodesService.searchDiagnosisCodes().subscribe(response => {
      console.log(response);
      this.diagnosisCodesList = response.diagnosisCodes; 
    });
  }
}
