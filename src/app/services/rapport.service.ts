import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RapportOperationDevise } from '../models/rapportOperationDevise.model';
import { RapportPM } from '../models/rapportPersonneMorale.model';
import { RapportPP } from '../models/rapportPersonnePhysique.model';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  baseUrl: String = "http://localhost:8081/rapport";
  constructor(private http: HttpClient) { }

  generateRapportOD(): Observable<any> {
    return this.http.get(this.baseUrl + '/generateRapportOD?format=csv', {responseType: 'text'});
  }
  generateRapportPM(): Observable<any> {
    return this.http.get(this.baseUrl + '/generateRapportPM?format=csv', {responseType: 'text'});
  }
  generateRapportPP(): Observable<any> {
    return this.http.get(this.baseUrl + '/generateRapportPP?format=csv', {responseType: 'text'});
  }


  getAllRapportsOD(): Observable<RapportOperationDevise[]> {
    return this.http.get<RapportOperationDevise[]>(this.baseUrl + '/rapportOD');
  }

  getRapportOD(id: number): Observable<RapportOperationDevise> {
    return this.http.get<RapportOperationDevise>(this.baseUrl + '/rapportOD/' + id);
  }
  createRapportOD(rapportOD: RapportOperationDevise): Observable<any> {
    return this.http.post<RapportOperationDevise>(this.baseUrl + '/rapportOD', rapportOD);
  }
  updateRapportOD(rapportOD: RapportOperationDevise): Observable<any> {
    return this.http.put<RapportOperationDevise>(this.baseUrl + '/rapportOD', rapportOD);
  }
  deleteRapportOD(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/rapportOD/' + id);
  }



  getAllRapportsPM(): Observable<RapportPM[]> {
    return this.http.get<RapportPM[]>(this.baseUrl + '/rapportPM');
  }

  getRapportPM(id: number): Observable<RapportPM> {
    return this.http.get<RapportPM>(this.baseUrl + '/rapportPM/' + id);
  }
  createRapportPM(rapportPM: RapportPM): Observable<RapportPM> {
    return this.http.post<RapportPM>(this.baseUrl + '/rapportPM', rapportPM);
  }
  updateRapportPM(rapportPM: RapportPM): Observable<RapportPM> {
    return this.http.put<RapportPM>(this.baseUrl + '/rapportPM', rapportPM);
  }
  deleteRapportPM(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/rapportPM/' + id);
  }


  getAllRapportsPP(): Observable<RapportPP[]> {
    return this.http.get<RapportPP[]>(this.baseUrl + '/rapportPM');
  }

  getRapportPP(id: number): Observable<RapportPP> {
    return this.http.get<RapportPP>(this.baseUrl + '/rapportPM/' + id);
  }
  createRapportPP(rapportPM: RapportPP): Observable<RapportPP> {
    return this.http.post<RapportPP>(this.baseUrl + '/rapportPM', rapportPM);
  }
  updateRapportPP(rapportPM: RapportPP): Observable<RapportPP> {
    return this.http.put<RapportPP>(this.baseUrl + '/rapportPM', rapportPM);
  }
  deleteRapportPP(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/rapportPM/' + id);
  }





}
