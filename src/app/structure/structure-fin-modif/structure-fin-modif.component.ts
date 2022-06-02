import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureFin } from 'src/app/models/structureFin.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-structure-fin-modif',
  templateUrl: './structure-fin-modif.component.html',
  styleUrls: ['./structure-fin-modif.component.css']
})
export class StructureFinModifComponent implements OnInit {

  UpdateForm!: FormGroup;
  structureFin!: StructureFin;
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
      finType: this.fb.control(null, Validators.required)
    });
    this.id = this.route.snapshot.params['id'];
    this.service.getOneStructureFin(this.id).subscribe(res => {
      this.structureFin = res;
      
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
    let struct: StructureFin = this.UpdateForm.value;
    if (this.UpdateForm.valid) {
      this.service.createStructureFin(struct).subscribe(res => {
        Swal.fire('updated!').then((ress) => {
          this.router.navigateByUrl('/structure/fin')
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
