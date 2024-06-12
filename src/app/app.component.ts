import { Component, OnInit } from '@angular/core';
import { DiagnosisCodesService } from './services/diagnosis-codes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private diagnosisCodesService: DiagnosisCodesService
  ){}

  title = 'Diagnosis Code';

  ngOnInit(){}
}
