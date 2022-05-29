import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Entete } from 'src/app/models/entete.model';
import { Fin } from 'src/app/models/fin.model';
import { RapportPM } from 'src/app/models/rapportPersonneMorale.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rapport-pm-ajout',
  templateUrl: './rapport-pm-ajout.component.html',
  styleUrls: ['./rapport-pm-ajout.component.css']
})
export class RapportPMAjoutComponent implements OnInit {

  ajoutRapportPMFormGroup!: FormGroup;
  entete!: Entete;
  fin!: Fin;

  constructor(private rapportService: RapportService, private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.ajoutRapportPMFormGroup = this.fb.group({

      numeroDeclaration: this.fb.control(null, Validators.required),
      codeEnregistrement: this.fb.control(110, Validators.required),
      codeOperation: this.fb.control(null, Validators.required),
      typeIdentifiantPersonne: this.fb.control(null),
      numeroIdentifiantPersonne: this.fb.control(null),
      numeroRegistreCommerce: this.fb.control(null),
      matriculeFiscal: this.fb.control(null),
      raisonSocialePM: this.fb.control(null),
      siglePM: this.fb.control(null),
      qualitePM: this.fb.control(null),
      nationalitePM: this.fb.control(null),
      codeTypePM: this.fb.control(null),
      codeFormeJuridique: this.fb.control(null),
      codeActivitePM: this.fb.control(null),
      codeRegime: this.fb.control(null),
      codeSituation: this.fb.control(null),
      dateSituationJuridique: this.fb.control(null),
      referenceJortSituationJuridique: this.fb.control(null),
      creationPM: this.fb.control(null),
      referenceJortPM: this.fb.control(null),
      dateEntreExploitation: this.fb.control(null),
      montantCapitalPM: this.fb.control(null),
      dateFixationCapitalSocial: this.fb.control(null),

      numeroTelephone1: this.fb.control(null),
      numeroTelephone2: this.fb.control(null),
      numeroFax: this.fb.control(null),
      numeroTelex: this.fb.control(null),
      adresseEmail: this.fb.control(null),
      adresseWebPM: this.fb.control(null),
      entete: this.fb.group({
        ndecl: this.fb.control(null, Validators.required),
        ktenr: this.fb.control(null, Validators.required),
        kte: this.fb.control(null, Validators.required),
        ddecl: this.fb.control(Validators.required),
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

  ajouterRapportPM() {
    let rapportPP:RapportPM = this.ajoutRapportPMFormGroup.value;
    if(this.ajoutRapportPMFormGroup.valid){
      this.rapportService.createRapportPM(rapportPP).subscribe(res=>{
        Swal.fire('success!!').then(msg=>{this.router.navigateByUrl('rapport/rapportPM');})
      },err=>{
        alert('serveur erreur!');
      });
  }
}

  ViderForm() {
    this.ajoutRapportPMFormGroup.reset;
  }


}
