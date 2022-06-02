import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApprobationDocument } from 'src/app/models/ApprobationDocument.model';
import { DeclarationService } from 'src/app/services/declaration.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-approbation-document-modifier',
  templateUrl: './approbation-document-modifier.component.html',
  styleUrls: ['./approbation-document-modifier.component.css'],
  providers:[DatePipe]
})
export class ApprobationDocumentModifierComponent implements OnInit {

  formgroup! : FormGroup;
  id!:string;
  approbation!:ApprobationDocument;
  datefield: any;
  constructor(private route: ActivatedRoute,private service:DeclarationService,private router: Router, private fb: FormBuilder,private date:DatePipe) { }


  ngOnInit(): void {
    
    this.id= this.route.snapshot.params['id'];
    this.service.getOneApprobationDocument(this.id).subscribe(resultat=>{
      this.approbation=resultat;

    },error=>{
      alert('server error..!');
    });

    this.formgroup = this.fb.group({
      entite: this.fb.control (null,Validators.required),
      nom: this.fb.control (null,Validators.required),
      date: this.fb.control (null,Validators.required),
      signature: this.fb.control (null,Validators.required)
    });

    
  }

  updateApprobation(){
    let entity:ApprobationDocument = this.formgroup.value;
    entity.id=this.id;console.log(entity);
    if(this.formgroup.valid){
      this.service.updateApprobationDocument(entity).subscribe(res=>{

        Swal.fire('success!!').then(msg=>{this.router.navigateByUrl('/approbation');})
        this.router.navigate(['/approbation']);},error=>{
          alert("error server!");
      });
    }
  }

  ViderForm(){
    this.formgroup.reset();
  }

}
