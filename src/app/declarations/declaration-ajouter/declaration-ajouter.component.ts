import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Declaration } from 'src/app/models/declaration.model';
import { DeclarationService } from 'src/app/services/declaration.service';

@Component({
  selector: 'app-declaration-ajouter',
  templateUrl: './declaration-ajouter.component.html',
  styleUrls: ['./declaration-ajouter.component.css']
})
export class DeclarationAjouterComponent implements OnInit {

  formgroup! : FormGroup;
  constructor(private http: HttpClient,private service:DeclarationService,private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.formgroup = this.fb.group({
      description: this.fb.control (null,Validators.required),
      domaine: this.fb.control (null,Validators.required),
      etatEnvoie: this.fb.control (null,Validators.required),
      type: this.fb.control (null,Validators.required),
      modeDeLancement: this.fb.control (null,Validators.required),
      periodicite: this.fb.control (null,Validators.required),
      destinataire: this.fb.control (null,Validators.required)
    });
  }
  ajoutDeclaration(){
    let entity:Declaration = this.formgroup.value;
    if(this.formgroup.valid){
      this.service.createDeclaration(entity).subscribe(res=>{

        alert("success");
        this.router.navigate(['/approbation']);},error=>{
          alert("error server!");
      });
    }
  }

  ViderForm(){
    this.formgroup.reset();
  }


}
