import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StructureEntete } from 'src/app/models/structureEntete.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-structure-entete-list',
  templateUrl: './structure-entete-list.component.html',
  styleUrls: ['./structure-entete-list.component.css']
})
export class StructureEnteteListComponent implements OnInit {

  title = 'datatables';
  dtOptions: any = {};
  enteteStructure!: StructureEntete[];
  constructor(private service: RapportService, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

      buttons: [
        'copy', 'csv', 'excel', 'print'
      ]
    };
    this.service.getAllStructureEntete().subscribe(res => {
      this.enteteStructure = res;
    });
  }

  DeleteEntete(c: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.service.deleteStructureEntete(c).subscribe(res => {
          Swal.fire('Removed!', ' removed successfully.', 'success').then((ress) => { window.location.reload(); });
        }, err => { alert('something went wrong..') });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'structure still in our database.)', 'error');
      }
    });
  }
  UpdateEntete(id: number) {

    this.router.navigate(['/structure/enteteUpdate/', id]);
  }

}
