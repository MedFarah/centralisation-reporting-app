import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportOperationDevise } from 'src/app/models/rapportOperationDevise.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rapport-od-modifier',
  templateUrl: './rapport-od-modifier.component.html',
  styleUrls: ['./rapport-od-modifier.component.css']
})
export class RapportODModifierComponent implements OnInit {
  updateRapportODFormGroup!:FormGroup;
  rapportOD!:RapportOperationDevise;
  numDeclaration!: number;

  constructor(private router: Router, private rapportService:RapportService, private fb:FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.numDeclaration = this.route.snapshot.params['numDeclaration'];
    this.rapportService.getRapportOD(this.numDeclaration).subscribe(res=>{
      this.rapportOD = res;
      console.log(res);
    },err=>{
      alert('error');
    });


    this.updateRapportODFormGroup = this.fb.group({
      numeroDeclaration: this.fb.control( Validators.required),
      codeEnregistrement: this.fb.control( Validators.required),
      codeOperation: this.fb.control( Validators.required),
      typeIdentifiantClient: this.fb.control(null),
      numIdentifiantClient: this.fb.control(null),
      codeAgenceDeclarant: this.fb.control( Validators.required),
      identifiantInterneOperation: this.fb.control(null),
      dateOperation: this.fb.control(null),
      codeTypeOperation: this.fb.control(null),
      codeDevise: this.fb.control(null),
      montantEnDevise: this.fb.control(null),
      montantEnDinar: this.fb.control(null),
      numDeclarationDouane: this.fb.control(null),
      dateDeclarationDouane: this.fb.control(null),
      montantDeclareEnDouane: this.fb.control(null),
      typeIdentifiantBeneficiairePP: this.fb.control(null),
      numIdentifiantBeneficiairePP: this.fb.control(null),
      typeIdentifiantBeneficiairePM: this.fb.control(null),
      numIdentifiantBeneficiairePM: this.fb.control(null),
      ribBeneficiaire: this.fb.control(null),
      typeCompteBeneficiaire: this.fb.control(null),
      codePaysExpediteurDesFonds: this.fb.control(null),
      entete: this.fb.group({
        ndecl: this.fb.control('',Validators.required),
        ktenr: this.fb.control( '',Validators.required),
        kte: this.fb.control( '',Validators.required),
        ddecl: this.fb.control( '',Validators.required),
        kmdecl: this.fb.control( '',Validators.required),
        demiss: this.fb.control( '',Validators.required)
      }),
      fin: this.fb.group({
        ndecl: this.fb.control('', Validators.required),
        ktenr: this.fb.control('', Validators.required),
        tot_MVT: this.fb.control('', Validators.required),
        v_CPT2: this.fb.control('', Validators.required),
        v_CPT3: this.fb.control('', Validators.required),
      })


    });

  }

  updateRapportOD(){
    let rapportOD:RapportOperationDevise = this.updateRapportODFormGroup.value;
    if(this.updateRapportODFormGroup.valid){
      this.rapportService.updateRapportOD(rapportOD).subscribe(res=>{
        Swal.fire('updated!').then((ress)=>{this.router.navigateByUrl('/rapport/rapportOD');
      });
    },err=>
    {alert('something went wrong..')});
    }
}

  ViderForm(){
    this.updateRapportODFormGroup.reset();
  }

}
