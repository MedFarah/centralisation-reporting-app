import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriqueModifications } from 'src/app/models/HistoriqueModifications.model';
import { DeclarationService } from 'src/app/services/declaration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historique-modification-update',
  templateUrl: './historique-modification-update.component.html',
  styleUrls: ['./historique-modification-update.component.css']
})
export class HistoriqueModificationUpdateComponent implements OnInit {

  formgroup! : FormGroup;
  id!:string;
  historique!:HistoriqueModifications;
  constructor(private route: ActivatedRoute,private service:DeclarationService,private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.service.getOneHistoriqueModifications(this.id).subscribe(resultat=>{
      this.historique=resultat;

    },error=>{
      alert('server error..!');
    });
    this.formgroup = this.fb.group({
      version: this.fb.control (null,Validators.required),
      date: this.fb.control (null,Validators.required),
      modification: this.fb.control (null,Validators.required),
      origine: this.fb.control (null,Validators.required)
    });
  }

  updateHistorique(){
    let entity:HistoriqueModifications = this.formgroup.value;
    if(this.formgroup.valid){
      this.service.updateHistoriqueModifications(entity).subscribe(res=>{

        Swal.fire('success!!').then(msg=>{this.router.navigateByUrl('/historique');})
      ;},error=>{
          alert("error server!");
      });
    }
  }

  ViderForm(){
    this.formgroup.reset();
  }

}
