import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RapportRejetService } from 'src/app/services/rapport-rejet.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
nbrRejetOD:number =7;
nbrRejetPP:number =9;
nbrRejetPM:number =15;
od? : number;
  constructor(private service:RapportRejetService) { }

  ngOnInit(): void {
   console.log(localStorage.getItem('token'));
    this.service.getRapportsOD().subscribe(res=>{
      this.nbrRejetOD=res.length;
      console.log(this.nbrRejetOD);
    });
    this.service.getRapportsPP().subscribe(res=>{
      this.nbrRejetPP=res.length;
    });
    this.service.getRapportsPM().subscribe(res=>{
      this.nbrRejetPM=res.length;
    });
    this.od= this.nbrRejetOD;
    let x:number;
    x=this.nbrRejetOD;
    var myChart = new Chart("myAreaChart", {
      type: 'pie',
      data: {
          labels: ['Opération Devise', 'Personne Physique', 'Personne morale'],
          datasets: [{
              label: '# of Votes',
              data: [this.nbrRejetOD,this.nbrRejetPP,this.nbrRejetPM],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'

              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });


  }

}
