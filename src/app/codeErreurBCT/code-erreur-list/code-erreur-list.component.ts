import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeErreurBCT } from 'src/app/models/codeErreurBCT.model';
import { RapportRejetService } from 'src/app/services/rapport-rejet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-code-erreur-list',
  templateUrl: './code-erreur-list.component.html',
  styleUrls: ['./code-erreur-list.component.css']
})
export class CodeErreurListComponent implements OnInit {


  title = 'datatables';
  dtOptions: any = {};
  selectedFiles: any;
  currentFile: any;
  codeErreurBCT! : CodeErreurBCT[];
  nbrCodeErreur!: number;
  codeError?: Array<CodeErreurBCT>;

  
  message = '';
  errorMsg = '';

  constructor(private http: HttpClient,private service:RapportRejetService,private router: Router) { }

  ngOnInit(): void {
   
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
    this.getListFromService();
  }

 
  getListFromService(){
    this.service.getAllCodeErreurs().subscribe(res=>{
      this.codeErreurBCT = res;
      this.nbrCodeErreur = this.codeErreurBCT.length;
     
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

      this.service.uploadCodeErreur(this.currentFile).subscribe(
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

DeleteCodeErreur(codeErreur:string){

    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.service.deleteCodeErreur(codeErreur).subscribe(res=>{
          Swal.fire('Removed!', ' removed successfully.', 'success').then((ress)=>{window.location.reload();});
        },err=>
        {alert('something went wrong..')});
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'the code still in our database.)', 'error');
      }
    });
  
}

UpdateCodeErreur(codeErreur:string){
  this.router.navigate(['/rejet/codeErreurUpdate/', codeErreur]);
}
}
