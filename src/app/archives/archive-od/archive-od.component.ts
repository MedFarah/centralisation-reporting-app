import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchiveRapportOD } from 'src/app/models/ArchiveRapportOD.model';
import { RapportRejetService } from 'src/app/services/rapport-rejet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archive-od',
  templateUrl: './archive-od.component.html',
  styleUrls: ['./archive-od.component.css']
})
export class ArchiveODComponent implements OnInit {

  title = 'datatables';
  dtOptions: any = {};
  selectedFiles: any;
  currentFile: any;
  rapports! : ArchiveRapportOD[];
  nbrRejets!: number;

  
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
      this.service.getAllArchiveOD().subscribe(res=>{
        this.rapports = res;
        
        
       
      });
      
    }

  

    DeleteRapportOD(id:string){
      Swal.fire({
        title: 'Are you sure?',
        text: 'This process is irreversible.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, let me think',
      }).then((result) => {
        if (result.value) {
          this.service.deleteArchiveOD(id).subscribe(res=>{
            Swal.fire('Removed!', ' archive removed successfully.', 'success').then((ress)=>{window.location.reload();});
          },err=>
          {alert('something went wrong..')});
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'the archive still in our database.)', 'error');
        }
      });
    }
    
    

    

}
