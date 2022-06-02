import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HistoriqueModifications } from 'src/app/models/HistoriqueModifications.model';
import { DeclarationService } from 'src/app/services/declaration.service';

@Component({
  selector: 'app-historique-modification-new',
  templateUrl: './historique-modification-new.component.html',
  styleUrls: ['./historique-modification-new.component.css']
})
export class HistoriqueModificationNewComponent implements OnInit {

 
  formgroup! : FormGroup;
  constructor(private service:DeclarationService,private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.formgroup = this.fb.group({
      version: this.fb.control (null,Validators.required),
      date: this.fb.control (null,Validators.required),
      modification: this.fb.control (null,Validators.required),
      origine: this.fb.control (null,Validators.required)
     
    });
  }
  ajoutHistorique(){
    let entity:HistoriqueModifications = this.formgroup.value;
    if(this.formgroup.valid){
      this.service.createHistoriqueModifications(entity).subscribe(res=>{

        alert("success");
        this.router.navigate(['/historique']);},error=>{
          alert("error server!");
      });
    }
  }

  ViderForm(){
    this.formgroup.reset();
  }

}
