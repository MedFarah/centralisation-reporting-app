import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportOperationDevise } from 'src/app/models/rapportOperationDevise.model';
import { RapportService } from 'src/app/services/rapport.service';

@Component({
  selector: 'app-rapport-od-detail',
  templateUrl: './rapport-od-detail.component.html',
  styleUrls: ['./rapport-od-detail.component.css']
})
export class RapportODDetailComponent implements OnInit {
  rapportOD!:RapportOperationDevise;
  numDeclaration!:number;
  constructor(private service:RapportService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.numDeclaration = this.route.snapshot.params['numDeclaration'];
  
    this.service.getRapportOD(this.numDeclaration).subscribe(res=>{
      this.rapportOD=res;
    },err=>{
      alert('serveur erreur!');
    })
  }

}
