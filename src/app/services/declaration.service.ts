import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApprobationDocument } from '../models/ApprobationDocument.model';
import { Declaration } from '../models/declaration.model';
import { HistoriqueModifications } from '../models/HistoriqueModifications.model';
import { ListeDestinataires } from '../models/listeDestinataire.model';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {
  baseUrl: String = "http://desktop-25eprh3:8082";
  jwtToken: any = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  getAllApprobationDocument(): Observable<ApprobationDocument[]> {
    let headers = new HttpHeaders();
    //headers.append('authorization',this.jwtToken)
    return this.http.get<ApprobationDocument[]>(this.baseUrl + '/approbation',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getOneApprobationDocument(id:string): Observable<any> {
    return this.http.get<ApprobationDocument>(this.baseUrl + '/approbation/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createApprobationDocument(approbationDocument: ApprobationDocument): Observable<ApprobationDocument> {
    return this.http.post<ApprobationDocument>(this.baseUrl + '/approbation', approbationDocument,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateApprobationDocument(approbationDocument: ApprobationDocument): Observable<ApprobationDocument> {
    return this.http.put<ApprobationDocument>(this.baseUrl + '/approbation', approbationDocument,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteApprobationDocument(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/approbation/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }


  getAllDeclaration(): Observable<Declaration[]> {
    return this.http.get<Declaration[]>(this.baseUrl + '/declaration',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getOneDeclaration(id:string): Observable<any> {
    return this.http.get<Declaration>(this.baseUrl + '/declaration/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createDeclaration(declaration: Declaration): Observable<Declaration> {
    return this.http.post<Declaration>(this.baseUrl + '/declaration', declaration,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateDeclaration(declaration: Declaration): Observable<Declaration> {
    return this.http.put<Declaration>(this.baseUrl + '/declaration', declaration,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteDeclaration(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/declaration/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }


  getAllHistoriqueModifications(): Observable<HistoriqueModifications[]> {
    return this.http.get<HistoriqueModifications[]>(this.baseUrl + '/historique',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getOneHistoriqueModifications(id:string): Observable<any> {
    return this.http.get<HistoriqueModifications>(this.baseUrl + '/historique/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createHistoriqueModifications(historiqueModifications: HistoriqueModifications): Observable<HistoriqueModifications> {
    return this.http.post<HistoriqueModifications>(this.baseUrl + '/historique', historiqueModifications,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateHistoriqueModifications(historiqueModifications: HistoriqueModifications): Observable<HistoriqueModifications> {
    return this.http.put<HistoriqueModifications>(this.baseUrl + '/historique', historiqueModifications,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteHistoriqueModifications(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/historique/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }


  getAllListeDestinataire(): Observable<ListeDestinataires[]> {
    return this.http.get<ListeDestinataires[]>(this.baseUrl + '/destinataire',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getOneListeDestinataire(id:string): Observable<any> {
    return this.http.get<ListeDestinataires>(this.baseUrl + '/destinataire/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createListeDestinataires(listeDestinataires: ListeDestinataires): Observable<ListeDestinataires> {
    return this.http.post<ListeDestinataires>(this.baseUrl + '/destinataire', listeDestinataires,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateListeDestinataires(listeDestinataires: ListeDestinataires): Observable<ListeDestinataires> {
    return this.http.put<ListeDestinataires>(this.baseUrl + '/destinataire', listeDestinataires,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteListeDestinataires(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/destinataire/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

}
