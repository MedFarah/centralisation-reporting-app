import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData } from 'chart.js';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RapportRejetService } from 'src/app/services/rapport-rejet.service';
import { ChartType, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
nbrRejetOD:number=14;
nbrRejetPP:number=5;
nbrRejetPM:number=7;
od? : number;
nb:number[]=[];

constructor(private service:RapportRejetService) {
  
  this.service.getRapportsOD().subscribe(res=>{
    this.nbrRejetOD=res.length;
    
    console.log(this.nbrRejetOD);
  });
  this.service.getRapportsPP().subscribe(res=>{
    this.nbrRejetPP=res.length; console.log(this.nbrRejetPP);
  });
  this.service.getRapportsPM().subscribe(res=>{
    this.nbrRejetPM=res.length;
    console.log(this.nbrRejetPM);
  });
 }

public barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  
  plugins: {
    legend: {
      display: true,
    },
   
  }
};



public barChartData: ChartData<'bar'> = {
  
  labels: [ 'Operation Devise', 'Personne Morale', 'Personne Physique' ],
  datasets: [
    { data: [this.nbrRejetOD,this.nbrRejetPM,this.nbrRejetPP], label: 'Series A' }
  ]
};

 

  ngOnInit(): void {

   
  }

}
