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

  searchDiagnosisCodes():Observable<any>{
    return this.http.get('/diagnosis-codes?size=9&page=0');
  }
}
