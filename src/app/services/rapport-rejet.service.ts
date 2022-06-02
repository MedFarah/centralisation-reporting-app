import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RapportOperationDevise } from '../models/rapportOperationDevise.model';
import { RapportPM } from '../models/rapportPersonneMorale.model';
import { RapportPP } from '../models/rapportPersonnePhysique.model';
import { CodeErreurBCT } from '../models/codeErreurBCT.model';

@Injectable({
  providedIn: 'root'
})
export class RapportRejetService {

baseUrl: String ="http://localhost:8080/rejets";
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl+'/injectRapportOD', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  uploadPP(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl+'/injectRapportPP', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  uploadPM(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl+'/injectRapportPM', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getRapportsOD(): Observable<RapportOperationDevise[]>{
    return this.http.get<RapportOperationDevise[]>(this.baseUrl+'/rapportsOD');
  }
  
  getRapportsPM(): Observable<RapportPM[]>{
    return this.http.get<RapportPM[]>(this.baseUrl+'/rapportsPM');
  }

  getRapportsPP(): Observable<RapportPP[]>{
    return this.http.get<RapportPP[]>(this.baseUrl+'/rapportsPP');
  }

  uploadCodeErreur(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl+'/injectCodeErreur', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getAllCodeErreurs(): Observable<CodeErreurBCT[]> {
    return this.http.get<CodeErreurBCT[]>(this.baseUrl+'/CodeErreurs');
  }
  getCodeErreur(codeErreur: string): Observable<CodeErreurBCT> {
    return this.http.get<CodeErreurBCT>(this.baseUrl+'/CodeErreurs/'+codeErreur);
  }
  createCodeErreur(codeErreurBCT: CodeErreurBCT): Observable<any> {
    return this.http.post<CodeErreurBCT>(this.baseUrl+'/CodeErreurs', codeErreurBCT);
  }
  updateCodeErreur(codeErreurBCT: CodeErreurBCT): Observable<any> {
    return this.http.put<CodeErreurBCT>(this.baseUrl+'/CodeErreurs', codeErreurBCT);
  }
  deleteCodeErreur(codeErreur: string): Observable<any> {
    return this.http.delete(this.baseUrl+'/CodeErreurs/'+codeErreur);
  }
 
  getStats():Observable<any>{
    return this.http.get(this.baseUrl+'/stats');
  }

}
