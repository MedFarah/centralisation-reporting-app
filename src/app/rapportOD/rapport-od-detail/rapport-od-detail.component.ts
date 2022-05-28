import { Component, OnInit } from '@angular/core';
import { RapportOperationDevise } from 'src/app/models/rapportOperationDevise.model';
import { RapportService } from 'src/app/services/rapport.service';

@Component({
  selector: 'app-rapport-od-detail',
  templateUrl: './rapport-od-detail.component.html',
  styleUrls: ['./rapport-od-detail.component.css']
})
export class RapportODDetailComponent implements OnInit {
  rapportOD!:RapportOperationDevise;
  constructor(private service:RapportService) { }

  ngOnInit(): void {
    this.service.getRapportOD(1).subscribe(res=>{
      this.rapportOD=res;
    })
  }

}
