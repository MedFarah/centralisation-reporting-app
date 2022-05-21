import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RapportOperationDevise } from '../models/rapportOperationDevise.model';

@Injectable({
  providedIn: 'root'
})
export class RapportRejetService {
baseUrl: String ="http://localhost:8080/rejets";
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl+'/te', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getRapportsOD(): Observable<RapportOperationDevise[]>{
    return this.http.get<RapportOperationDevise[]>(this.baseUrl+'/rapportsOD');
  }
  
}
