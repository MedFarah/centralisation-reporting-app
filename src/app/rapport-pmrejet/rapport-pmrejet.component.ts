import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { RapportRejetService } from 'src/app/services/rapport-rejet.service';
import { RapportOperationDevise } from 'src/app/models/rapportOperationDevise.model';
import { Router } from '@angular/router';
import { CodeErreurRapport } from 'src/app/models/codeErreurRapports.model';
import { RapportPM } from '../models/rapportPersonneMorale.model';


@Component({
  selector: 'app-rapport-pmrejet',
  templateUrl: './rapport-pmrejet.component.html',
  styleUrls: ['./rapport-pmrejet.component.css']
})
export class RapportPMRejetComponent implements OnInit {

  title = 'datatables';
  dtOptions: any = {};
  selectedFiles: any;
  currentFile: any;
  rapports! : RapportPM[];
  nbrRejets!: number;
  codeError?: Array<CodeErreurRapport>;

  
  message = '';
  errorMsg = '';

   
  constructor(private http: HttpClient,private service:RapportRejetService,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
    this.getListFromService();
    
  
  }
    getListFromService(){
      this.service.getRapportsPM().subscribe(res=>{
        this.rapports = res;
        this.nbrRejets = this.rapports.length;
      });
      
    }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  
  upload(): void {
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.service.uploadPM(this.currentFile).subscribe(
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
    this.service.createArchivePM(id).subscribe(res=>{
      alert('success');
    });
  }

}
