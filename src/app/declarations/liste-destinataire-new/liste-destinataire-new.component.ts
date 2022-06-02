import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListeDestinataires } from 'src/app/models/listeDestinataire.model';
import { DeclarationService } from 'src/app/services/declaration.service';

@Component({
  selector: 'app-liste-destinataire-new',
  templateUrl: './liste-destinataire-new.component.html',
  styleUrls: ['./liste-destinataire-new.component.css']
})
export class ListeDestinataireNewComponent implements OnInit {

  formgroup! : FormGroup;
  constructor(private service:DeclarationService,private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.formgroup = this.fb.group({
      entite: this.fb.control (null,Validators.required),
      pourApprob: this.fb.control (null,Validators.required),
      destinataire: this.fb.control (null,Validators.required),
      pourComment: this.fb.control (null,Validators.required),
      pourAppli: this.fb.control (null,Validators.required),
      pourInfo: this.fb.control (null,Validators.required)
    });
  }
  ajoutListeDestinataire(){
    let entity:ListeDestinataires = this.formgroup.value;
    if(this.formgroup.valid){
      this.service.createListeDestinataires(entity).subscribe(res=>{

        alert("success");
        this.router.navigate(['/destinataire']);},error=>{
          alert("error server!");
      });
    }
  }

  ViderForm(){
    this.formgroup.reset();
  }

}
