import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportPP } from 'src/app/models/rapportPersonnePhysique.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rapport-pp-list',
  templateUrl: './rapport-pp-list.component.html',
  styleUrls: ['./rapport-pp-list.component.css']
})
export class RapportPPListComponent implements OnInit {
  title = 'datatables';
  dtOptions: any = {};
  rapports!:RapportPP[];

  nbrRejets!: number;
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

    this.rapportService.getAllRapportsPP().subscribe(res=>{
      this.rapports=res;
      this.nbrRejets= this.rapports.length;
    });
  }

  generateRapportPP(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.rapportService.generateRapportPP().subscribe(res=>{
          Swal.fire('Generated!', ' generated successfully.', 'success');
        },err=>{
          alert('error server..');
        });
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'opération annulée', 'error');
      }
    });
  }

  DeleteRapportPP(numDeclaration:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.rapportService.deleteRapportPP(numDeclaration).subscribe(res=>{
          Swal.fire('Removed!', ' removed successfully.', 'success').then((ress)=>{window.location.reload();});
        },err=>
        {alert('something went wrong..')});
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'the report still in our database.)', 'error');
      }
    });
  }

  UpdateRapportPP(numDeclaration:number){
    this.router.navigate(['/rapport/rapportPPUpdate/',numDeclaration]);

  }

  DetailRapportPP(numDeclaration:number){
    this.router.navigate(['/rapport/rapportPPDetail/',numDeclaration]);
  }
}
