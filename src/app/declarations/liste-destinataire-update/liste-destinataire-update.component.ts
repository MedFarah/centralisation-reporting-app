import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeDestinataires } from 'src/app/models/listeDestinataire.model';
import { DeclarationService } from 'src/app/services/declaration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-destinataire-update',
  templateUrl: './liste-destinataire-update.component.html',
  styleUrls: ['./liste-destinataire-update.component.css']
})
export class ListeDestinataireUpdateComponent implements OnInit {

  formgroup! : FormGroup;
  id!:string;
  destinataire!:ListeDestinataires;
  constructor(private route: ActivatedRoute,private service:DeclarationService,private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.service.getOneListeDestinataire(this.id).subscribe(resultat=>{
      this.destinataire=resultat;

    },error=>{
      alert('server error..!');
    });
    this.formgroup = this.fb.group({
      entite: this.fb.control (null,Validators.required),
      pourApprob: this.fb.control (null,Validators.required),
      destinataire: this.fb.control (null,Validators.required),
      pourComment: this.fb.control (null,Validators.required),
      pourAppli: this.fb.control (null,Validators.required),
      pourInfo: this.fb.control (null,Validators.required)
    });
  }

  updateListeDestinataire(){
    let entity:ListeDestinataires = this.formgroup.value;
    if(this.formgroup.valid){
      this.service.updateListeDestinataires(entity).subscribe(res=>{

        Swal.fire('success!!').then(msg=>{this.router.navigateByUrl('/destinataire');})
      ;},error=>{
          alert("error server!");
      });
    }
  }

  ViderForm(){
    this.formgroup.reset();
  }

}
