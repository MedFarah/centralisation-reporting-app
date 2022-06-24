import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RapportOperationDevise } from '../models/rapportOperationDevise.model';
import { RapportPM } from '../models/rapportPersonneMorale.model';
import { RapportPP } from '../models/rapportPersonnePhysique.model';
import { CodeErreurBCT } from '../models/codeErreurBCT.model';
import { ArchiveRapportOD } from '../models/ArchiveRapportOD.model';
import { ArchiveRapportPP } from '../models/archiveRapportPP.model';
import { ArchiveRapportPM } from '../models/archiveRapportPM.model';

@Injectable({
  providedIn: 'root'
})
export class RapportRejetService {

baseUrl: String ="http://desktop-25eprh3:8080/rejets";
baseUrlArchive: String ="http://desktop-25eprh3:8080";
jwtToken:any =localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl+'/injectRapportOD' ,formData, {
      headers:new HttpHeaders({'authorization':this.jwtToken}),
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  uploadPP(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl+'/injectRapportPP', formData, {
      headers:new HttpHeaders({'authorization':this.jwtToken}),
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  uploadPM(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl+'/injectRapportPM', formData, {
      headers:new HttpHeaders({'authorization':this.jwtToken}),
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getRapportsOD(): Observable<RapportOperationDevise[]>{
    return this.http.get<RapportOperationDevise[]>(this.baseUrl+'/rapportsOD',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  
  getRapportsPM(): Observable<RapportPM[]>{
    return this.http.get<RapportPM[]>(this.baseUrl+'/rapportsPM',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getRapportsPP(): Observable<RapportPP[]>{
    return this.http.get<RapportPP[]>(this.baseUrl+'/rapportsPP',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  uploadCodeErreur(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl+'/injectCodeErreur', formData, {
      headers:new HttpHeaders({'authorization':this.jwtToken}),
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getAllCodeErreurs(): Observable<CodeErreurBCT[]> {
    return this.http.get<CodeErreurBCT[]>(this.baseUrl+'/CodeErreurs',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  getCodeErreur(codeErreur: string): Observable<CodeErreurBCT> {
    return this.http.get<CodeErreurBCT>(this.baseUrl+'/CodeErreurs/'+codeErreur,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  createCodeErreur(codeErreurBCT: CodeErreurBCT): Observable<any> {
    return this.http.post<CodeErreurBCT>(this.baseUrl+'/CodeErreurs', codeErreurBCT,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateCodeErreur(codeErreurBCT: CodeErreurBCT): Observable<any> {
    return this.http.put<CodeErreurBCT>(this.baseUrl+'/CodeErreurs', codeErreurBCT,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteCodeErreur(codeErreur: string): Observable<any> {
    return this.http.delete(this.baseUrl+'/CodeErreurs/'+codeErreur,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
 
  getStats():Observable<any>{
    return this.http.get(this.baseUrl+'/stats',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getAllArchiveOD(): Observable<ArchiveRapportOD[]> {
    return this.http.get<ArchiveRapportOD[]>(this.baseUrlArchive+'/archiveOD',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createArchiveOD(numDeclaration: number): Observable<ArchiveRapportOD> {
    return this.http.get<ArchiveRapportOD>(this.baseUrlArchive+'/archiveOD/'+numDeclaration,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }


  deleteArchiveOD(id: string): Observable<any> {
    return this.http.delete(this.baseUrlArchive+'/archiveOD/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getAllArchivePP(): Observable<ArchiveRapportPP[]> {
    return this.http.get<ArchiveRapportPP[]>(this.baseUrlArchive+'/archivePP',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createArchivePP(numDeclaration: number): Observable<ArchiveRapportPP> {
    return this.http.get<ArchiveRapportPP>(this.baseUrlArchive+'/archivePP/'+numDeclaration,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  deleteArchivePP(id: string): Observable<any> {
    return this.http.delete(this.baseUrlArchive+'/archivePP/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getAllArchivePM(): Observable<ArchiveRapportPM[]> {
    return this.http.get<ArchiveRapportPM[]>(this.baseUrlArchive+'/archivePM',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createArchivePM(numDeclaration: number): Observable<ArchiveRapportPM> {
    return this.http.get<ArchiveRapportPM>(this.baseUrlArchive+'/archivePM/'+numDeclaration,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  deleteArchivePM(id: string): Observable<any> {
    return this.http.delete(this.baseUrlArchive+'/archivePM/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
}
