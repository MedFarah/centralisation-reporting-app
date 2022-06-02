import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StructureFin } from 'src/app/models/structureFin.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-structure-fin-ajout',
  templateUrl: './structure-fin-ajout.component.html',
  styleUrls: ['./structure-fin-ajout.component.css']
})
export class StructureFinAjoutComponent implements OnInit {

  addStructureFinFormGroup!: FormGroup;
  isSubmitted?: false;
  structureFin!: StructureFin;
  CorpType: any = ['operationDevise', 'personnePhysique', 'personneMorale'];
  constructor(private service: RapportService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addStructureFinFormGroup = this.fb.group({
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
    return this.addStructureFinFormGroup.get('corpType');
  }

  addStructureEntete(){
    let structureFin= this.addStructureFinFormGroup.value;
   console.log(structureFin.corpType);
    if(this.addStructureFinFormGroup.valid){
      this.service.createStructureFin(structureFin).subscribe(res=>{
        Swal.fire('success!!').then(msg=>{this.router.navigateByUrl('structure/fin');})
      },err=>{
        alert('serveur erreur!');
      });
  }

  }
  ViderForm(){
    this.addStructureFinFormGroup.reset;
  }

}
