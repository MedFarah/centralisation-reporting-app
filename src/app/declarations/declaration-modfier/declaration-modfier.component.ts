import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Declaration } from 'src/app/models/declaration.model';
import { DeclarationService } from 'src/app/services/declaration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-declaration-modfier',
  templateUrl: './declaration-modfier.component.html',
  styleUrls: ['./declaration-modfier.component.css']
})
export class DeclarationModfierComponent implements OnInit {

  formgroup! : FormGroup;
  id!:string;
  declaration!:Declaration;
  constructor(private route: ActivatedRoute,private service:DeclarationService,private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.service.getOneDeclaration(this.id).subscribe(resultat=>{
      this.declaration=resultat;

    },error=>{
      alert('server error..!');
    });
    this.formgroup = this.fb.group({
      description: this.fb.control (null,Validators.required),
      domaine: this.fb.control (null,Validators.required),
      etatEnvoie: this.fb.control (null,Validators.required),
      type: this.fb.control (null,Validators.required),
      modeDeLancement: this.fb.control (null,Validators.required),
      periodicite: this.fb.control (null,Validators.required),
      destinataire: this.fb.control (null,Validators.required)
    });
  }

  updateDeclaration(){
    let entity:Declaration = this.formgroup.value;
    if(this.formgroup.valid){
      this.service.updateDeclaration(entity).subscribe(res=>{

        Swal.fire('success!!').then(msg=>{this.router.navigateByUrl('/declaration');})
        this.router.navigate(['/approbation']);},error=>{
          alert("error server!");
      });
    }
  }

  ViderForm(){
    this.formgroup.reset();
  }


}
