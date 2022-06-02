import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApprobationDocument } from 'src/app/models/ApprobationDocument.model';
import { DeclarationService } from 'src/app/services/declaration.service';

@Component({
  selector: 'app-approbation-document-ajout',
  templateUrl: './approbation-document-ajout.component.html',
  styleUrls: ['./approbation-document-ajout.component.css']
})
export class ApprobationDocumentAjoutComponent implements OnInit {

  formgroup! : FormGroup;
  constructor(private http: HttpClient,private service:DeclarationService,private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.formgroup = this.fb.group({
      entite: this.fb.control (null,Validators.required),
      nom: this.fb.control (null,Validators.required),
      date: this.fb.control (null,Validators.required),
      signature: this.fb.control (null,Validators.required)
    });
  }
  ajoutApprobation(){
    let entity:ApprobationDocument = this.formgroup.value;
    if(this.formgroup.valid){
      this.service.createApprobationDocument(entity).subscribe(res=>{

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
