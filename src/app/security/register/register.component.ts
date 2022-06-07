import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: this.fb.control(null, [Validators.email,Validators.required]),
      password: this.fb.control(null, Validators.required),
      confirmPassword: this.fb.control(null, Validators.required)
    });
  }

  onPasswordChange() {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }
  
  // getting the form control elements
  get password(): AbstractControl {
    return this.addUserForm.controls['password'];
  }
  
  get confirm_password(): AbstractControl {
    return this.addUserForm.controls['confirmPassword'];
  }

  registerUser(){
    let u = this.addUserForm.value;
    console.log(u);
    if(this.addUserForm.valid){
      this.securityService.register(u).subscribe(res=>{
        alert('success');
      },err=>{
        alert('server error');
      });
    }
  }
}
