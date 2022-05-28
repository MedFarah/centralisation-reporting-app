import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Entete } from 'src/app/models/entete.model';
import { Fin } from 'src/app/models/fin.model';
import { RapportOperationDevise } from 'src/app/models/rapportOperationDevise.model';
import { RapportService } from 'src/app/services/rapport.service';

@Component({
  selector: 'app-rapport-od-ajouter',
  templateUrl: './rapport-od-ajouter.component.html',
  styleUrls: ['./rapport-od-ajouter.component.css']
})
export class RapportODAjouterComponent implements OnInit {
  ajoutRapportODFormGroup!: FormGroup;
  entete!: Entete;
  fin!: Fin;

  constructor(private rapportService: RapportService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ajoutRapportODFormGroup = this.fb.group({
      numeroDeclaration: this.fb.control(null, Validators.required),
      codeEnregistrement: this.fb.control(910, Validators.required),
      codeOperation: this.fb.control(null, Validators.required),
      typeIdentifiantClient: this.fb.control(null),
      numIdentifiantClient: this.fb.control(null),
      codeAgenceDeclarant: this.fb.control(null, Validators.required),
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
        ndecl: this.fb.control('num decl', Validators.required),
        ktenr: this.fb.control(null, Validators.required),
        kte: this.fb.control(null, Validators.required),
        ddecl: this.fb.control( Validators.required),
        kmdecl: this.fb.control(null, Validators.required),
        demiss: this.fb.control(null, Validators.required)
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
  ajouterRapportOD() {
    let rapportOD:RapportOperationDevise = this.ajoutRapportODFormGroup.value;
    if(this.ajoutRapportODFormGroup.valid){
    this.rapportService.createRapportOD(rapportOD).subscribe(res=>{
      alert("success");
      console.log(res);
      this.router.navigate(['/rapport/rapportOD']);},error=>{
        alert("error!");
    });}}

  ViderForm() {
    this.ajoutRapportODFormGroup.reset();
  }
}
