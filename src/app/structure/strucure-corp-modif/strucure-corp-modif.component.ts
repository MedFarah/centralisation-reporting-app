import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureCorp } from 'src/app/models/structureCorp.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-strucure-corp-modif',
  templateUrl: './strucure-corp-modif.component.html',
  styleUrls: ['./strucure-corp-modif.component.css']
})
export class StrucureCorpModifComponent implements OnInit {
  UpdateForm!: FormGroup;
  structureCorp!: StructureCorp;
  id!: number;
  CorpType: any = ['operationDevise', 'personnePhysique', 'personneMorale'];

  constructor(private route: ActivatedRoute, private service: RapportService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.UpdateForm = this.fb.group({
      designation: this.fb.control(null, Validators.required),
      type: this.fb.control(null, Validators.required),
      taille: this.fb.control(null, Validators.required),
      table: this.fb.control(null, Validators.required),
      champ: this.fb.control(null, Validators.required),
      commentaire: this.fb.control(null, Validators.required),
      corpType: this.fb.control(null, Validators.required)
    });
    this.id = this.route.snapshot.params['id'];
    this.service.getOneStructureCorp(this.id).subscribe(res => {
      this.structureCorp = res;
      
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
    let struct: StructureCorp = this.UpdateForm.value;
    if (this.UpdateForm.valid) {
      this.service.createStructureCorp(struct).subscribe(res => {
        Swal.fire('updated!').then((ress) => {
          this.router.navigateByUrl('/structure/corp')
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
