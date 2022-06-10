import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  jwtToken:any = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  generateRapportOD(): Observable<any> {
    return this.http.get(this.baseUrl + '/generateRapportOD?format=csv', {responseType: 'text',headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  generateRapportPM(): Observable<any> {
    return this.http.get(this.baseUrl + '/generateRapportPM?format=csv', {responseType: 'text',headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  generateRapportPP(): Observable<any> {
    return this.http.get(this.baseUrl + '/generateRapportPP?format=csv', {responseType: 'text',headers:new HttpHeaders({'authorization':this.jwtToken})});
  }


  getAllRapportsOD(): Observable<RapportOperationDevise[]> {
    return this.http.get<RapportOperationDevise[]>(this.baseUrl + '/rapportOD',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getRapportOD(id: number): Observable<RapportOperationDevise> {
    return this.http.get<RapportOperationDevise>(this.baseUrl + '/rapportOD/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  createRapportOD(rapportOD: RapportOperationDevise): Observable<any> {
    return this.http.post<RapportOperationDevise>(this.baseUrl + '/rapportOD', rapportOD,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateRapportOD(rapportOD: RapportOperationDevise): Observable<any> {
    return this.http.put<RapportOperationDevise>(this.baseUrl + '/rapportOD', rapportOD,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteRapportOD(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/rapportOD/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }



  getAllRapportsPM(): Observable<RapportPM[]> {
    return this.http.get<RapportPM[]>(this.baseUrl + '/rapportPM',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getRapportPM(id: number): Observable<RapportPM> {
    return this.http.get<RapportPM>(this.baseUrl + '/rapportPM/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  createRapportPM(rapportPM: RapportPM): Observable<RapportPM> {
    return this.http.post<RapportPM>(this.baseUrl + '/rapportPM', rapportPM,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateRapportPM(rapportPM: RapportPM): Observable<RapportPM> {
    return this.http.put<RapportPM>(this.baseUrl + '/rapportPM', rapportPM,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteRapportPM(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/rapportPM/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }


  getAllRapportsPP(): Observable<RapportPP[]> {
    return this.http.get<RapportPP[]>(this.baseUrl + '/rapportPP',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getRapportPP(id: number): Observable<RapportPP> {
    return this.http.get<RapportPP>(this.baseUrl + '/rapportPP/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  createRapportPP(rapportPP: RapportPP): Observable<RapportPP> {
    return this.http.post<RapportPP>(this.baseUrl + '/rapportPP', rapportPP,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateRapportPP(rapportPP: RapportPP): Observable<RapportPP> {
    return this.http.put<RapportPP>(this.baseUrl + '/rapportPP', rapportPP,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteRapportPP(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/rapportPP/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getAllStructureCorp(): Observable<StructureCorp[]> {
    return this.http.get<StructureCorp[]>(this.baseUrlStructure + '/corp',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getOneStructureCorp(id:number): Observable<any> {
    return this.http.get<StructureCorp>(this.baseUrlStructure + '/corp/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createStructureCorp(structureCorp: StructureCorp): Observable<StructureCorp> {
    return this.http.post<StructureCorp>(this.baseUrlStructure + '/corp', structureCorp,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateStructureCorp(structureCorp: StructureCorp): Observable<StructureCorp> {
    return this.http.put<StructureCorp>(this.baseUrlStructure + '/corp', structureCorp,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteStructureCorp(id: number): Observable<any> {
    return this.http.delete(this.baseUrlStructure + '/corp/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }


  getAllStructureEntete(): Observable<StructureEntete[]> {
    return this.http.get<StructureEntete[]>(this.baseUrlStructure + '/entete',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getOneStructureEntete(id:number): Observable<any> {
    return this.http.get<StructureEntete>(this.baseUrlStructure + '/entete/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createStructureEntete(structureEntete: StructureEntete): Observable<StructureEntete> {
    return this.http.post<StructureEntete>(this.baseUrlStructure + '/entete', structureEntete,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateStructureEntete(structureEntete: StructureEntete): Observable<StructureEntete> {
    return this.http.put<StructureEntete>(this.baseUrlStructure + '/entete', structureEntete,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteStructureEntete(id: number): Observable<any> {
    return this.http.delete(this.baseUrlStructure + '/entete/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }


  getAllStructureFin(): Observable<StructureFin[]> {
    return this.http.get<StructureFin[]>(this.baseUrlStructure + '/fin',{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  getOneStructureFin(id:number): Observable<any> {
    return this.http.get<StructureFin>(this.baseUrlStructure + '/fin/'+id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }

  createStructureFin(structureFin: StructureFin): Observable<StructureFin> {
    return this.http.post<StructureFin>(this.baseUrlStructure + '/fin', structureFin,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  updateStructureFin(structureFin: StructureFin): Observable<StructureFin> {
    return this.http.put<StructureFin>(this.baseUrlStructure + '/fin', structureFin,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }
  deleteStructureFin(id: number): Observable<any> {
    return this.http.delete(this.baseUrlStructure + '/fin/' + id,{headers:new HttpHeaders({'authorization':this.jwtToken})});
  }





}
