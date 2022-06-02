import { HttpClient } from '@angular/common/http';
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
  baseUrl: String = "http://localhost:8082";
  constructor(private http: HttpClient) { }

  getAllApprobationDocument(): Observable<ApprobationDocument[]> {
    return this.http.get<ApprobationDocument[]>(this.baseUrl + '/approbation');
  }

  getOneApprobationDocument(id:string): Observable<any> {
    return this.http.get<ApprobationDocument>(this.baseUrl + '/approbation/'+id);
  }

  createApprobationDocument(approbationDocument: ApprobationDocument): Observable<ApprobationDocument> {
    return this.http.post<ApprobationDocument>(this.baseUrl + '/approbation', approbationDocument);
  }
  updateApprobationDocument(approbationDocument: ApprobationDocument): Observable<ApprobationDocument> {
    return this.http.put<ApprobationDocument>(this.baseUrl + '/approbation', approbationDocument);
  }
  deleteApprobationDocument(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/approbation/' + id);
  }


  getAllDeclaration(): Observable<Declaration[]> {
    return this.http.get<Declaration[]>(this.baseUrl + '/declaration');
  }

  getOneDeclaration(id:string): Observable<any> {
    return this.http.get<Declaration>(this.baseUrl + '/declaration/'+id);
  }

  createDeclaration(declaration: Declaration): Observable<Declaration> {
    return this.http.post<Declaration>(this.baseUrl + '/declaration', declaration);
  }
  updateDeclaration(declaration: Declaration): Observable<Declaration> {
    return this.http.put<Declaration>(this.baseUrl + '/declaration', declaration);
  }
  deleteDeclaration(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/declaration/' + id);
  }


  getAllHistoriqueModifications(): Observable<HistoriqueModifications[]> {
    return this.http.get<HistoriqueModifications[]>(this.baseUrl + '/historique');
  }

  getOneHistoriqueModifications(id:string): Observable<any> {
    return this.http.get<HistoriqueModifications>(this.baseUrl + '/historique/'+id);
  }

  createHistoriqueModifications(historiqueModifications: HistoriqueModifications): Observable<HistoriqueModifications> {
    return this.http.post<HistoriqueModifications>(this.baseUrl + '/historique', historiqueModifications);
  }
  updateHistoriqueModifications(historiqueModifications: HistoriqueModifications): Observable<HistoriqueModifications> {
    return this.http.put<HistoriqueModifications>(this.baseUrl + '/historique', historiqueModifications);
  }
  deleteHistoriqueModifications(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/historique/' + id);
  }


  getAllListeDestinataire(): Observable<ListeDestinataires[]> {
    return this.http.get<ListeDestinataires[]>(this.baseUrl + '/destinataire');
  }

  getOneListeDestinataire(id:string): Observable<any> {
    return this.http.get<ListeDestinataires>(this.baseUrl + '/destinataire/'+id);
  }

  createListeDestinataires(listeDestinataires: ListeDestinataires): Observable<ListeDestinataires> {
    return this.http.post<ListeDestinataires>(this.baseUrl + '/destinataire', listeDestinataires);
  }
  updateListeDestinataires(listeDestinataires: ListeDestinataires): Observable<ListeDestinataires> {
    return this.http.put<ListeDestinataires>(this.baseUrl + '/destinataire', listeDestinataires);
  }
  deleteListeDestinataires(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/destinataire/' + id);
  }

}
