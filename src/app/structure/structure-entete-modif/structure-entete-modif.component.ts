import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureCorp } from 'src/app/models/structureCorp.model';
import { StructureEntete } from 'src/app/models/structureEntete.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-structure-entete-modif',
  templateUrl: './structure-entete-modif.component.html',
  styleUrls: ['./structure-entete-modif.component.css']
})
export class StructureEnteteModifComponent implements OnInit {

  UpdateForm!: FormGroup;
  structureEntete!: StructureEntete;
  id!: number;
  CorpType: any = ['operationDevise', 'personnePhysique', 'personneMorale'];

  constructor(private route: ActivatedRoute, private service: RapportService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.UpdateForm = this.fb.group({
      designation: this.fb.control(null, Validators.required),
      type: this.fb.control(null, Validators.required),
      taille: this.fb.control(null, Validators.required),
      regleDeGestion: this.fb.control(null, Validators.required),
      commentaire: this.fb.control(null, Validators.required),
      enteteType: this.fb.control(null, Validators.required)
    });
    this.id = this.route.snapshot.params['id'];
    this.service.getOneStructureEntete(this.id).subscribe(res => {
      this.structureEntete = res;
      
    }, err => { alert('server error') });

    
  }

  changeType(e: any) {
    this.corpType?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  // Access formcontrols getter
  get corpType() {
    return this.UpdateForm.get('corpType');
  }

  updateStruct() {
    let struct: StructureEntete = this.UpdateForm.value;
    if (this.UpdateForm.valid) {
      this.service.createStructureEntete(struct).subscribe(res => {
        Swal.fire('updated!').then((ress) => {
          this.router.navigateByUrl('/structure/entete')
        });
      }, err => {
        alert('something went wrong..');
      });
    }


  }

  ViderForm() {
    this.UpdateForm.reset;
  }

}
