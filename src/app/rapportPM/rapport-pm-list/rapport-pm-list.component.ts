import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RapportPM } from 'src/app/models/rapportPersonneMorale.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rapport-pm-list',
  templateUrl: './rapport-pm-list.component.html',
  styleUrls: ['./rapport-pm-list.component.css']
})
export class RapportPMListComponent implements OnInit {

  title = 'datatables';
  dtOptions: any = {};
  rapports!:RapportPM[];
  nbrRapport!: number;

  constructor(private router:Router,private fb:FormBuilder, private rapportService:RapportService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

        buttons: [
          'copy', 'csv', 'excel', 'print'
      ]
    };

    this.rapportService.getAllRapportsPM().subscribe(res=>{
      this.rapports=res;
      this.nbrRapport= this.rapports.length;
    });
  }

  generateRapportPM(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.rapportService.generateRapportPM().subscribe(res=>{
          Swal.fire('Generated!', ' generated successfully.', 'success');
        },err=>{
          alert('error server..');
        });
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'opération annulée', 'error');
      }
    });
  }

  DeleteRapportPM(numDeclaration:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.rapportService.deleteRapportPM(numDeclaration).subscribe(res=>{
          Swal.fire('Removed!', ' removed successfully.', 'success').then((ress)=>{window.location.reload();});
        },err=>
        {alert('something went wrong..')});
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'the report still in our database.)', 'error');
      }
    });
  }

  UpdateRapportPM(numDeclaration:number){
    this.router.navigate(['/rapport/rapportPMUpdate/',numDeclaration]);

  }

  DetailRapportPM(numDeclaration:number){
    this.router.navigate(['/rapport/rapportPMDetail/',numDeclaration]);
  }
}
