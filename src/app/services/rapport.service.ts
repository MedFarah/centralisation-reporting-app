import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RapportOperationDevise } from '../models/rapportOperationDevise.model';
import { RapportPM } from '../models/rapportPersonneMorale.model';
import { RapportPP } from '../models/rapportPersonnePhysique.model';
import { StructureCorp } from '../models/structureCorp.model';
import { StructureEntete } from '../models/structureEntete.model';
import { StructureFin } from '../models/structureFin.model';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  baseUrl: String = "http://localhost:8081/rapport";
  baseUrlStructure: String = "http://localhost:8081/structure";
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
    return this.http.get<RapportPP[]>(this.baseUrl + '/rapportPP');
  }

  getRapportPP(id: number): Observable<RapportPP> {
    return this.http.get<RapportPP>(this.baseUrl + '/rapportPP/' + id);
  }
  createRapportPP(rapportPP: RapportPP): Observable<RapportPP> {
    return this.http.post<RapportPP>(this.baseUrl + '/rapportPP', rapportPP);
  }
  updateRapportPP(rapportPP: RapportPP): Observable<RapportPP> {
    return this.http.put<RapportPP>(this.baseUrl + '/rapportPP', rapportPP);
  }
  deleteRapportPP(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/rapportPP/' + id);
  }

  getAllStructureCorp(): Observable<StructureCorp[]> {
    return this.http.get<StructureCorp[]>(this.baseUrlStructure + '/corp');
  }

  getOneStructureCorp(id:number): Observable<any> {
    return this.http.get<StructureCorp>(this.baseUrlStructure + '/corp/'+id);
  }

  createStructureCorp(structureCorp: StructureCorp): Observable<StructureCorp> {
    return this.http.post<StructureCorp>(this.baseUrlStructure + '/corp', structureCorp);
  }
  updateStructureCorp(structureCorp: StructureCorp): Observable<StructureCorp> {
    return this.http.put<StructureCorp>(this.baseUrlStructure + '/corp', structureCorp);
  }
  deleteStructureCorp(id: number): Observable<any> {
    return this.http.delete(this.baseUrlStructure + '/corp/' + id);
  }


  getAllStructureEntete(): Observable<StructureEntete[]> {
    return this.http.get<StructureEntete[]>(this.baseUrlStructure + '/entete');
  }

  getOneStructureEntete(id:number): Observable<any> {
    return this.http.get<StructureEntete>(this.baseUrlStructure + '/entete/'+id);
  }

  createStructureEntete(structureEntete: StructureEntete): Observable<StructureEntete> {
    return this.http.post<StructureEntete>(this.baseUrlStructure + '/entete', structureEntete);
  }
  updateStructureEntete(structureEntete: StructureEntete): Observable<StructureEntete> {
    return this.http.put<StructureEntete>(this.baseUrlStructure + '/entete', structureEntete);
  }
  deleteStructureEntete(id: number): Observable<any> {
    return this.http.delete(this.baseUrlStructure + '/entete/' + id);
  }


  getAllStructureFin(): Observable<StructureFin[]> {
    return this.http.get<StructureFin[]>(this.baseUrlStructure + '/fin');
  }

  getOneStructureFin(id:number): Observable<any> {
    return this.http.get<StructureFin>(this.baseUrlStructure + '/fin/'+id);
  }

  createStructureFin(structureFin: StructureFin): Observable<StructureFin> {
    return this.http.post<StructureFin>(this.baseUrlStructure + '/fin', structureFin);
  }
  updateStructureFin(structureFin: StructureFin): Observable<StructureFin> {
    return this.http.put<StructureFin>(this.baseUrlStructure + '/fin', structureFin);
  }
  deleteStructureFin(id: number): Observable<any> {
    return this.http.delete(this.baseUrlStructure + '/fin/' + id);
  }





}
