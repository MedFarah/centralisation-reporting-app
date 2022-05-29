import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RapportOperationDevise } from 'src/app/models/rapportOperationDevise.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rapport-od-list',
  templateUrl: './rapport-od-list.component.html',
  styleUrls: ['./rapport-od-list.component.css']
})
export class RapportODListComponent implements OnInit {

  title = 'datatables';
  dtOptions: any = {};
  selectedFiles: any;
  currentFile: any;
  rapports! : RapportOperationDevise[];
  nbrRejets!: number;

  
  message = '';
  errorMsg = '';

   
  constructor(private http: HttpClient,private rapportService:RapportService,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

        buttons: [
          'copy', 'csv', 'excel', 'print'
      ]
    };
   
    this.getListFromService();
    
  
  }
    getListFromService(){
      this.rapportService.getAllRapportsOD().subscribe(res=>{
        this.rapports = res;
        this.nbrRejets = this.rapports.length;
        
       
      });
      
    }

    generateRapportOD(){
      Swal.fire({
        title: 'Are you sure?',
        text: 'This process is irreversible.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, let me think',
      }).then((result) => {
        if (result.value) {
          this.rapportService.generateRapportOD().subscribe(res=>{
            Swal.fire('Generated!', ' generated successfully.', 'success');
          },err=>{
            alert('error server..');
          });
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'opération annulée', 'error');
        }
      });
    }

    DeleteRapportOD(id:number){
      Swal.fire({
        title: 'Are you sure?',
        text: 'This process is irreversible.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, let me think',
      }).then((result) => {
        if (result.value) {
          this.rapportService.deleteRapportOD(id).subscribe(res=>{
            Swal.fire('Removed!', ' removed successfully.', 'success').then((ress)=>{window.location.reload();});
          },err=>
          {alert('something went wrong..')});
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'the report still in our database.)', 'error');
        }
      });
    }
    
    UpdateRapportOD(numDeclaration:number){
      this.router.navigate(['/rapport/rapportODUpdate/',numDeclaration]);

    }

    DetailRapportOD(numDeclaration:number){
      this.router.navigate(['/rapport/rapportODDetail/',numDeclaration]);
    }
  }

