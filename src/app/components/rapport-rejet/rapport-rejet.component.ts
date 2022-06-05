import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { RapportRejetService } from 'src/app/services/rapport-rejet.service';
import { RapportOperationDevise } from 'src/app/models/rapportOperationDevise.model';
import { Router } from '@angular/router';
import { CodeErreurRapport } from 'src/app/models/codeErreurRapports.model';

@Component({
  selector: 'app-rapport-rejet',
  templateUrl: './rapport-rejet.component.html',
  styleUrls: ['./rapport-rejet.component.css']
})
export class RapportRejetComponent implements OnInit {

  title = 'datatables';
  dtOptions: any = {};
  selectedFiles: any;
  currentFile: any;
  rapports : RapportOperationDevise[] = [];
  rap!:RapportOperationDevise;
  nbrRejets!: number;
  codeError: CodeErreurRapport[] = [];

  
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
      this.service.getRapportsOD().subscribe(res=>{
        this.rapports = res;
        
        this.nbrRejets = this.rapports.length;
        this.rap=this.rapports[0];
        this.rapports.forEach(x=>this.codeError.push(x.fin.codeErreurRapports));
                      //  this.codeError= this.rapports.codeErreurRapports[];
        console.log(this.codeError);
        this.codeError.forEach(r=>console.log(r.codeErreur));
        
        for (let p of this.rapports[0].fin.codeErreurRapports!)
        {
          console.log(p.motif);
        }
       
      });
      
    }
    

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.rapports);
  }

  
  upload(): void {
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.service.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              console.log(Math.round(100 * event.loaded / event.total));

            } else if (event instanceof HttpResponse) {
              this.message = event.body.responseMessage;
            }
            Swal.fire('Hey', 'Success!', 'success');
            
          },
          (err: any) => {
            console.log(err);

            if (err.error && err.error.responseMessage) {
              this.errorMsg = err.error.responseMessage;
            } else {
              this.errorMsg = 'Error occurred while uploading a file!';
            }

            this.currentFile = undefined;
            Swal.fire('Error occurred while uploading a file!');
          });
      }

      this.selectedFiles = undefined;
    }
  }

  ArchiverRapport(id:number){
    this.service.createArchiveOD(id).subscribe(res=>{
      alert('success');
    });
  }

}
