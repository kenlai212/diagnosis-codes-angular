import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisCodesService {
  constructor(
    private http: HttpClient
  ) { }

  searchDiagnosisCodes(page:number):Observable<any>{

    return this.http.get(`/diagnosis-codes-api/diagnosis-codes?size=9&page=${page.toString()}`);
  }
}
