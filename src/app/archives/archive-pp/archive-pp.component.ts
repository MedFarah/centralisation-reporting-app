import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchiveRapportPP } from 'src/app/models/archiveRapportPP.model';
import { RapportRejetService } from 'src/app/services/rapport-rejet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archive-pp',
  templateUrl: './archive-pp.component.html',
  styleUrls: ['./archive-pp.component.css']
})
export class ArchivePPComponent implements OnInit {

  title = 'datatables';
  dtOptions: any = {};

  rapports! : ArchiveRapportPP[];

  
  message = '';
  errorMsg = '';

   
  constructor(private http: HttpClient,private service:RapportRejetService,private router: Router) {
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
      this.service.getAllArchivePP().subscribe(res=>{
        this.rapports = res;
        
        
       
      });
      
    }

  

    DeleteRapportPP(id:string){
      Swal.fire({
        title: 'Are you sure?',
        text: 'This process is irreversible.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, let me think',
      }).then((result) => {
        if (result.value) {
          this.service.deleteArchivePP(id).subscribe(res=>{
            Swal.fire('Removed!', ' archive removed successfully.', 'success').then((ress)=>{window.location.reload();});
          },err=>
          {alert('something went wrong..')});
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'the archive still in our database.)', 'error');
        }
      });
    }
    
    

}
