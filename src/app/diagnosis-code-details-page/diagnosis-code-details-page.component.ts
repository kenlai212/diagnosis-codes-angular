import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosisCodesService } from '../services/diagnosis-codes.service';

@Component({
  selector: 'app-diagnosis-code-details-page',
  templateUrl: './diagnosis-code-details-page.component.html',
  styleUrls: ['./diagnosis-code-details-page.component.scss']
})
export class DiagnosisCodeDetailsPageComponent implements OnInit {
  code:string = "";
  longDesc:string = "";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private diagnosisService: DiagnosisCodesService
  ) { 
    const id = String(this.route.snapshot.paramMap.get("id"));
    
    this.diagnosisService.getDiagnosisCode(id).subscribe(response => {
      this.code = response.code;
      this.longDesc = response.longDesc;
    });

    
  }

  ngOnInit(): void {}

  back(){
    this.location.back();
  }

}
