import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeErreurBCT } from 'src/app/models/codeErreurBCT.model';
import { RapportRejetService } from 'src/app/services/rapport-rejet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-code-erreur-ajouter',
  templateUrl: './code-erreur-ajouter.component.html',
  styleUrls: ['./code-erreur-ajouter.component.css']
})
export class CodeErreurAjouterComponent implements OnInit {

  formgroup! : FormGroup;
  constructor(private http: HttpClient,private service:RapportRejetService,private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formgroup=this.fb.group({
      codeErreur : this.fb.control( null,[Validators.required,Validators.minLength(5)]),
      description : this.fb.control (null,Validators.required)

    });
  }
  ajouterCodeErreur(){
    let codeErreurBCT:CodeErreurBCT = this.formgroup.value;
    if(this.formgroup.valid){
    this.service.createCodeErreur(codeErreurBCT).subscribe(res=>{
      alert("success");
      console.log(res);
      this.router.navigate(['/rejet/codeErreur']);},error=>{
        alert("error!");
    });
  }
  }

  ViderForm(){
    this.formgroup.reset();
  }

}
