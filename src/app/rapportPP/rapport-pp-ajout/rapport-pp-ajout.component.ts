import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Entete } from 'src/app/models/entete.model';
import { Fin } from 'src/app/models/fin.model';
import { RapportPP } from 'src/app/models/rapportPersonnePhysique.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rapport-pp-ajout',
  templateUrl: './rapport-pp-ajout.component.html',
  styleUrls: ['./rapport-pp-ajout.component.css']
})
export class RapportPPAjoutComponent implements OnInit {

  ajoutRapportPPFormGroup!: FormGroup;
  entete!: Entete;
  fin!: Fin;

  constructor(private rapportService: RapportService, private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.ajoutRapportPPFormGroup = this.fb.group({
      numeroDeclaration: this.fb.control(null, Validators.required),
      codeEnregistrement: this.fb.control(105, Validators.required),
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
        ndecl: this.fb.control('num decl', Validators.required),
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


  ajouterRapportPP() {
    let rapportPP:RapportPP = this.ajoutRapportPPFormGroup.value;
    if(this.ajoutRapportPPFormGroup.valid){
      this.rapportService.createRapportPP(rapportPP).subscribe(res=>{
        Swal.fire('success!!').then(msg=>{this.router.navigateByUrl('rapport/rapportPP');})
      },err=>{
        alert('serveur erreur!');
      });
  }
}

  ViderForm() {
    this.ajoutRapportPPFormGroup.reset;
  }

}
