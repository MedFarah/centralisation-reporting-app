import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportPP } from 'src/app/models/rapportPersonnePhysique.model';
import { RapportService } from 'src/app/services/rapport.service';

@Component({
  selector: 'app-rapport-pp-modifer',
  templateUrl: './rapport-pp-modifer.component.html',
  styleUrls: ['./rapport-pp-modifer.component.css']
})
export class RapportPPModiferComponent implements OnInit {

  updateRapportPPFormGroup!:FormGroup;
  rapportPP!:RapportPP;
  numDeclaration!: number;

  constructor(private router: Router, private rapportService:RapportService, private fb:FormBuilder,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.numDeclaration = this.route.snapshot.params['numDeclaration'];
    this.rapportService.getRapportPP(this.numDeclaration).subscribe(res=>{
      this.rapportPP = res;
      this.updateRapportPPFormGroup.controls['numeroDeclaration'].setValue(this.rapportPP.numeroDeclaration);
      this.updateRapportPPFormGroup.controls['codeEnregistrement'].setValue(this.rapportPP.codeEnregistrement);
      this.updateRapportPPFormGroup.controls['codeOperation'].setValue(this.rapportPP.codeOperation);
      this.updateRapportPPFormGroup.controls['typeDocument'].setValue(this.rapportPP.typeDocument);
      this.updateRapportPPFormGroup.controls['numeroDocumentIdentification'].setValue(this.rapportPP.numeroDocumentIdentification);
      this.updateRapportPPFormGroup.controls['dateDebutDocumentIdentification'].setValue(this.rapportPP.dateDebutDocumentIdentification);
      this.updateRapportPPFormGroup.controls['lieuDelivranceDocumentIdentification'].setValue(this.rapportPP.lieuDelivranceDocumentIdentification);
      this.updateRapportPPFormGroup.controls['dateFinValiditeDocumentIdentification'].setValue(this.rapportPP.dateFinValiditeDocumentIdentification);
      this.updateRapportPPFormGroup.controls['nomPersonPhysique'].setValue(this.rapportPP.nomPersonPhysique);
      this.updateRapportPPFormGroup.controls['prenomPersonnePhysique'].setValue(this.rapportPP.prenomPersonnePhysique);
      this.updateRapportPPFormGroup.controls['sexePersonnePhysique'].setValue(this.rapportPP.sexePersonnePhysique);
      this.updateRapportPPFormGroup.controls['numeroDeclaration'].setValue(this.rapportPP.numeroDeclaration);
      this.updateRapportPPFormGroup.controls['dateNaissance'].setValue(this.rapportPP.dateNaissance);
      this.updateRapportPPFormGroup.controls['lieuNaissance'].setValue(this.rapportPP.lieuNaissance);
      this.updateRapportPPFormGroup.controls['qualitePersonne'].setValue(this.rapportPP.qualitePersonne);
      this.updateRapportPPFormGroup.controls['nationalite'].setValue(this.rapportPP.nationalite);
      this.updateRapportPPFormGroup.controls['profession'].setValue(this.rapportPP.profession);
      this.updateRapportPPFormGroup.controls['etatCivil'].setValue(this.rapportPP.etatCivil);
      this.updateRapportPPFormGroup.controls['situationJuridique'].setValue(this.rapportPP.situationJuridique);
      this.updateRapportPPFormGroup.controls['dateSituationJuridique'].setValue(this.rapportPP.dateSituationJuridique);
      this.updateRapportPPFormGroup.controls['numeroTelephone1'].setValue(this.rapportPP.numeroTelephone1);
      this.updateRapportPPFormGroup.controls['numeroTelephone2'].setValue(this.rapportPP.numeroTelephone2);
      this.updateRapportPPFormGroup.controls['numeroFax'].setValue(this.rapportPP.numeroFax);
      this.updateRapportPPFormGroup.controls['numeroTelex'].setValue(this.rapportPP.numeroTelex);
      this.updateRapportPPFormGroup.controls['adresseEmail'].setValue(this.rapportPP.adresseEmail);

      

    },err=>{
      alert('error');
    });
   
    this.updateRapportPPFormGroup = this.fb.group({
      numeroDeclaration: this.fb.control(null, Validators.required),
      codeEnregistrement: this.fb.control(null, Validators.required),
      codeOperation: this.fb.control(null, Validators.required),
      typeDocument: this.fb.control(null),
      numeroDocumentIdentification: this.fb.control(null),

      dateDebutDocumentIdentification: this.fb.control(null),
      lieuDelivranceDocumentIdentification: this.fb.control(null),

      dateFinValiditeDocumentIdentification: this.fb.control(null),

      nomPersonPhysique: this.fb.control(null),
      prenomPersonnePhysique: this.fb.control(null),
      sexePersonnePhysique: this.fb.control(null),
      dateNaissance: this.fb.control(null),
      lieuNaissance: this.fb.control(null),
      qualitePersonne: this.fb.control(null),
      nationalite: this.fb.control(null),
      profession: this.fb.control(null),
      etatCivil: this.fb.control(null),
      situationJuridique: this.fb.control(null),
      dateSituationJuridique: this.fb.control(null),
      numeroTelephone1: this.fb.control(null),
      numeroTelephone2: this.fb.control(null),
      numeroFax: this.fb.control(null),
      numeroTelex: this.fb.control(null),
      adresseEmail: this.fb.control(null,Validators.email),
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
  UpdateRapportPP(){

  }

}
