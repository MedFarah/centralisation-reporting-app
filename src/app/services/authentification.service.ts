import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { AppUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private jwtToken!: string;
  baseUrl: string = "http://desktop-25eprh3:8084";
  constructor(private http: HttpClient,public jwtHelper: JwtHelperService) { }



  login(user:AppUser){
  //  return this.http.post<any>(this.baseUrl + '/login', user, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
   return this.http.post(this.baseUrl+"/login",user,{observe:'response'});
  }

  register(user:AppUser){
    return this.http.post(this.baseUrl+"/register",user);
  }

  saveToken(jwtToken:any){
    this.jwtToken=jwtToken;
    localStorage.setItem("token",jwtToken);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    const serializableState: string | any = localStorage.getItem('token');
  // return  serializableState !== null || serializableState === undefined ? JSON.parse(serializableState) : undefined;
  if (token!= null){
    return true;
  }
   return false ;
  }

  deleteUser(id: string, token: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/users/' + id,{headers:new HttpHeaders({'authorization':token})});
  }

}
