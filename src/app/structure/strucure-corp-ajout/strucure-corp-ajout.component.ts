import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StructureCorp } from 'src/app/models/structureCorp.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-strucure-corp-ajout',
  templateUrl: './strucure-corp-ajout.component.html',
  styleUrls: ['./strucure-corp-ajout.component.css']
})
export class StrucureCorpAjoutComponent implements OnInit {
  addStructureCorpFormGroup!: FormGroup;
  isSubmitted?: false;
  structureCorp!: StructureCorp;
  CorpType: any = ['operationDevise', 'personnePhysique', 'personneMorale'];
  constructor(private service: RapportService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addStructureCorpFormGroup = this.fb.group({
      designation: this.fb.control(null, Validators.required),
      type: this.fb.control(null, Validators.required),
      taille: this.fb.control(null, Validators.required),
      table: this.fb.control(null, Validators.required),
      champ: this.fb.control(null, Validators.required),
      commentaire: this.fb.control(null, Validators.required),
      corpType: this.fb.control(null, Validators.required)
    });
  }


  changeType(e: any){
    this.corpType?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  // Access formcontrols getter
  get corpType() {
    return this.addStructureCorpFormGroup.get('corpType');
  }

  addStructureCorp(){
    let structureCorp = this.addStructureCorpFormGroup.value;
   console.log(structureCorp.corpType);
    if(this.addStructureCorpFormGroup.valid){
      this.service.createStructureCorp(structureCorp).subscribe(res=>{
        Swal.fire('success!!').then(msg=>{this.router.navigateByUrl('structure/corp');})
      },err=>{
        alert('serveur erreur!');
      });
  }

  }
  ViderForm(){
    this.addStructureCorpFormGroup.reset;
  }

}
