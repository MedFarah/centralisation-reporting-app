import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StructureFin } from 'src/app/models/structureFin.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-structure-fin-list',
  templateUrl: './structure-fin-list.component.html',
  styleUrls: ['./structure-fin-list.component.css']
})
export class StructureFinListComponent implements OnInit {

  title = 'datatables';
  dtOptions: any = {};
  finStructure!: StructureFin[];
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
    this.service.getAllStructureFin().subscribe(res => {
      this.finStructure = res;
    });
  }

  DeleteFin(c: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.service.deleteStructureFin(c).subscribe(res => {
          Swal.fire('Removed!', ' removed successfully.', 'success').then((ress) => { window.location.reload(); });
        }, err => { alert('something went wrong..') });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'structure still in our database.)', 'error');
      }
    });
  }
  UpdateFin(id: number) {

    this.router.navigate(['/structure/finUpdate/', id]);
  }

}
