import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprobationDocument } from 'src/app/models/ApprobationDocument.model';
import { DeclarationService } from 'src/app/services/declaration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approbation-document-list',
  templateUrl: './approbation-document-list.component.html',
  styleUrls: ['./approbation-document-list.component.css']
})
export class ApprobationDocumentListComponent implements OnInit {

  tab!: ApprobationDocument[];
  title = 'datatables';
  dtOptions: any = {};
  nbr!: number;

  constructor(private serviceDeclaration: DeclarationService, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

      buttons: [
        'copy', 'csv', 'excel', 'print'
      ]
    };

    this.serviceDeclaration.getAllApprobationDocument().subscribe(res => {
      this.tab = res;
      this.nbr = this.tab.length;
    });
  }

  DeleteApprobation(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.serviceDeclaration.deleteApprobationDocument(id).subscribe(res=>{
          Swal.fire('Removed!', ' removed successfully.', 'success').then((ress)=>{window.location.reload();});
        },err=>
        {alert('something went wrong..')});
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'the record still in our database.)', 'error');
      }
    });
  }


  UpdateApprobation(id:string){
    this.router.navigate(['/approbationUpdate/', id]);
  }

}

