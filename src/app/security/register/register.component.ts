import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/models/user.model';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  logged!:boolean;
  addUserForm!: FormGroup;
  user!:AppUser;

  constructor( private route:Router,private securityService:AuthentificationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.logged=!this.securityService.isAuthenticated();
    this.addUserForm = this.fb.group({
      username: this.fb.control(null, Validators.required),
    });
  }

  registerUser(){

  }
}
