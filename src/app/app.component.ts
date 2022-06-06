import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'centralisation-reporting-app';
  logged!:boolean;
constructor(private route:Router,private authService:AuthentificationService){}
  ngOnInit(): void {
    this.logged=this.authService.isAuthenticated();
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/auth');
    window.location.reload();
  }
}
