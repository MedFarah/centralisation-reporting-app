import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StructureEntete } from 'src/app/models/structureEntete.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-structure-entete-ajout',
  templateUrl: './structure-entete-ajout.component.html',
  styleUrls: ['./structure-entete-ajout.component.css']
})
export class StructureEnteteAjoutComponent implements OnInit {

  addStructureEnteteFormGroup!: FormGroup;
  isSubmitted?: false;
  structureEntete!: StructureEntete;
  CorpType: any = ['operationDevise', 'personnePhysique', 'personneMorale'];
  constructor(private service: RapportService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addStructureEnteteFormGroup = this.fb.group({
      designation: this.fb.control(null, Validators.required),
      type: this.fb.control(null, Validators.required),
      taille: this.fb.control(null, Validators.required),
      regleDeGestion: this.fb.control(null, Validators.required),
      commentaire: this.fb.control(null, Validators.required),
      enteteType: this.fb.control(null, Validators.required)
    });
  }


  changeType(e: any){
    this.corpType?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  // Access formcontrols getter
  get corpType() {
    return this.addStructureEnteteFormGroup.get('corpType');
  }

  addStructureEntete(){
    let structureEntete= this.addStructureEnteteFormGroup.value;
   console.log(structureEntete.corpType);
    if(this.addStructureEnteteFormGroup.valid){
      this.service.createStructureEntete(structureEntete).subscribe(res=>{
        Swal.fire('success!!').then(msg=>{this.router.navigateByUrl('structure/entete');})
      },err=>{
        alert('serveur erreur!');
      });
  }

  }
  ViderForm(){
    this.addStructureEnteteFormGroup.reset;
  }


}
