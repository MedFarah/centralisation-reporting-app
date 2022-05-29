import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportPM } from 'src/app/models/rapportPersonneMorale.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rapport-pm-modifier',
  templateUrl: './rapport-pm-modifier.component.html',
  styleUrls: ['./rapport-pm-modifier.component.css']
})
export class RapportPMModifierComponent implements OnInit {

  modifRapportPMFormGroup!:FormGroup;
  rapportPM!:RapportPM;
  numDeclaration!:number;
  constructor(private rapportService: RapportService, private router: Router, private fb: FormBuilder, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.numDeclaration = this.route.snapshot.params['numDeclaration'];
    this.rapportService.getRapportPM(this.numDeclaration).subscribe(res=>{
      this.rapportPM = res;
      this.modifRapportPMFormGroup.controls['numeroDeclaration'].setValue(this.rapportPM.numeroDeclaration);
      this.modifRapportPMFormGroup.controls['codeEnregistrement'].setValue(this.rapportPM.codeEnregistrement);
      this.modifRapportPMFormGroup.controls['codeOperation'].setValue(this.rapportPM.codeOperation);
      this.modifRapportPMFormGroup.controls['typeIdentifiantPersonne'].setValue(this.rapportPM.typeIdentifiantPersonne);
      this.modifRapportPMFormGroup.controls['numeroIdentifiantPersonne'].setValue(this.rapportPM.numeroIdentifiantPersonne);
      this.modifRapportPMFormGroup.controls['numeroRegistreCommerce'].setValue(this.rapportPM.numeroRegistreCommerce);
      this.modifRapportPMFormGroup.controls['matriculeFiscal'].setValue(this.rapportPM.matriculeFiscal);
      this.modifRapportPMFormGroup.controls['raisonSocialePM'].setValue(this.rapportPM.raisonSocialePM);
      this.modifRapportPMFormGroup.controls['siglePM'].setValue(this.rapportPM.siglePM);
      this.modifRapportPMFormGroup.controls['qualitePM'].setValue(this.rapportPM.qualitePM);
      this.modifRapportPMFormGroup.controls['nationalitePM'].setValue(this.rapportPM.nationalitePM);
      this.modifRapportPMFormGroup.controls['codeTypePM'].setValue(this.rapportPM.codeTypePM);
      this.modifRapportPMFormGroup.controls['codeFormeJuridique'].setValue(this.rapportPM.codeFormeJuridique);
      this.modifRapportPMFormGroup.controls['codeActivitePM'].setValue(this.rapportPM.codeActivitePM);
      this.modifRapportPMFormGroup.controls['codeRegime'].setValue(this.rapportPM.codeRegime);
      this.modifRapportPMFormGroup.controls['codeSituation'].setValue(this.rapportPM.codeSituation);
      this.modifRapportPMFormGroup.controls['dateSituationJuridique'].setValue(this.rapportPM.dateSituationJuridique);
      this.modifRapportPMFormGroup.controls['referenceJortSituationJuridique'].setValue(this.rapportPM.referenceJortSituationJuridique);
      this.modifRapportPMFormGroup.controls['creationPM'].setValue(this.rapportPM.creationPM);
      this.modifRapportPMFormGroup.controls['referenceJortPM'].setValue(this.rapportPM.referenceJortPM);
      this.modifRapportPMFormGroup.controls['dateEntreExploitation'].setValue(this.rapportPM.dateEntreExploitation);
      this.modifRapportPMFormGroup.controls['montantCapitalPM'].setValue(this.rapportPM.montantCapitalPM);
      this.modifRapportPMFormGroup.controls['dateFixationCapitalSocial'].setValue(this.rapportPM.dateFixationCapitalSocial);
      this.modifRapportPMFormGroup.controls['numeroTelephone1'].setValue(this.rapportPM.numeroTelephone1);
      this.modifRapportPMFormGroup.controls['numeroTelephone2'].setValue(this.rapportPM.numeroTelephone2);
      this.modifRapportPMFormGroup.controls['numeroFax'].setValue(this.rapportPM.numeroFax);
      this.modifRapportPMFormGroup.controls['numeroTelex'].setValue(this.rapportPM.numeroTelex);
      this.modifRapportPMFormGroup.controls['adresseEmail'].setValue(this.rapportPM.adresseEmail);
      this.modifRapportPMFormGroup.controls['adresseWebPM'].setValue(this.rapportPM.adresseWebPM);


    });
    this.modifRapportPMFormGroup = this.fb.group({

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

  modifierRapportPM(){
    let rapportPM:RapportPM = this.modifRapportPMFormGroup.value;
    if(this.modifRapportPMFormGroup.valid){
      this.rapportService.updateRapportPM(rapportPM).subscribe(res=>{
        Swal.fire('updated!').then((ress)=>{this.router.navigateByUrl('/rapport/rapportPM');
      });
    },err=>
    {alert('something went wrong..')});
    }
  }
  ViderForm(){
    this.modifRapportPMFormGroup.reset;
  }
}
