import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportPM } from 'src/app/models/rapportPersonneMorale.model';
import { RapportService } from 'src/app/services/rapport.service';

@Component({
  selector: 'app-rapport-pm-detail',
  templateUrl: './rapport-pm-detail.component.html',
  styleUrls: ['./rapport-pm-detail.component.css']
})
export class RapportPMDetailComponent implements OnInit {

  rapportPM!:RapportPM;
  numDeclaration!:number;
  constructor(private rapportService: RapportService, private router: Router, private fb: FormBuilder, private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.numDeclaration = this.route.snapshot.params['numDeclaration'];
    this.rapportService.getRapportPM(this.numDeclaration).subscribe(res=>{
      this.rapportPM = res;});
  }

}
