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
    const url = `/diagnosis-codes-bff/diagnosis-codes?size=9&page=${page.toString()}`;
    const response = this.http.get(url);
    return response;
  }

  getDiagnosisCode(id:string):Observable<any>{
    return this.http.get(`/diagnosis-codes-bff/diagnosis-code/${id}`);
  }
}
