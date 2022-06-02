import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriqueModifications } from 'src/app/models/HistoriqueModifications.model';
import { DeclarationService } from 'src/app/services/declaration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historique-modification-list',
  templateUrl: './historique-modification-list.component.html',
  styleUrls: ['./historique-modification-list.component.css']
})
export class HistoriqueModificationListComponent implements OnInit {

  tab!: HistoriqueModifications[];
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

    this.serviceDeclaration.getAllHistoriqueModifications().subscribe(res => {
      this.tab = res;
      this.nbr = this.tab.length;
    });
  }

  DeleteHistorique(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.serviceDeclaration.deleteHistoriqueModifications(id).subscribe(res=>{
          Swal.fire('Removed!', ' removed successfully.', 'success').then((ress)=>{window.location.reload();});
        },err=>
        {alert('something went wrong..')});
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'the record still in our database.)', 'error');
      }
    });
  }



  UpdateHistorique(id:string){
    this.router.navigate(['/historique/', id]);
  }


}
