import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeErreurBCT } from 'src/app/models/codeErreurBCT.model';
import { RapportRejetService } from 'src/app/services/rapport-rejet.service';

@Component({
  selector: 'app-code-erreur-modifier',
  templateUrl: './code-erreur-modifier.component.html',
  styleUrls: ['./code-erreur-modifier.component.css']
})
export class CodeErreurModifierComponent implements OnInit {
  codeErreurBCT!: CodeErreurBCT;
  codeErreur!: string;
  UpdateCodeFormgroup!:FormGroup;

  constructor(private service:RapportRejetService,private route: ActivatedRoute,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.codeErreur= this.route.snapshot.params['codeErreur'];
    this.service.getCodeErreur(this.codeErreur).subscribe(resultat=>{
      this.codeErreurBCT=resultat;
      console.log(resultat);
    },error=>{
      alert('server error..!');
    });

    this.UpdateCodeFormgroup=this.fb.group({
      codeErreur : this.fb.control( null,[Validators.required,Validators.minLength(5)]),
      description : this.fb.control (null,Validators.required)

    });
  }

  updateCodeErreur(){
    let codeErreurobject:CodeErreurBCT = this.UpdateCodeFormgroup.value;
    this.service.updateCodeErreur(codeErreurobject).subscribe(res=>{
      alert('success');
      console.log(res);
      this.router.navigateByUrl('/rejet/codeErreur');
    },err=>{
      alert('server error');
    });
  }
}
