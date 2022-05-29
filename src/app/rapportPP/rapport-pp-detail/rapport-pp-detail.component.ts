import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportPP } from 'src/app/models/rapportPersonnePhysique.model';
import { RapportService } from 'src/app/services/rapport.service';

@Component({
  selector: 'app-rapport-pp-detail',
  templateUrl: './rapport-pp-detail.component.html',
  styleUrls: ['./rapport-pp-detail.component.css']
})
export class RapportPPDetailComponent implements OnInit {
  rapportPP!:RapportPP;
  numDeclaration!: number;
  constructor(private router: Router, private rapportService:RapportService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.numDeclaration = this.route.snapshot.params['numDeclaration'];
    this.rapportService.getRapportPP(this.numDeclaration).subscribe(res=>{
      this.rapportPP = res;
    },err=>{
      alert("serveur erreur !!");
    });
  }

}
