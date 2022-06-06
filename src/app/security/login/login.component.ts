import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/models/user.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
  });
  }

  OnLogin(){
    let user:AppUser = this.loginForm.value;
  console.log(user);
    this.authService.login(user).subscribe(res=>{
      //alert('done');
      let jwtToken = res.headers.get('Authorization');
      this.authService.saveToken(jwtToken);
      localStorage.setItem('username',user.username);
      console.log(jwtToken);
    //  console.log(this.authService.isAuthenticated());
      this.router.navigateByUrl('/dashboard');
     
     
    //  this.authService.saveToken(jwtToken);
     // this.router.navigateByUrl('/');
    },err=>{
      Swal.fire('Username ou mot de passe est incorrecte!');
    });
  }

 
}
