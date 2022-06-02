import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StructureCorp } from 'src/app/models/structureCorp.model';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-strucure-corp-list',
  templateUrl: './strucure-corp-list.component.html',
  styleUrls: ['./strucure-corp-list.component.css']
})
export class StrucureCorpListComponent implements OnInit {
  title = 'datatables';
  dtOptions: any = {};
  corpStructure!: StructureCorp[];
  test: number[] = [1,2,3,4,5,6];
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
    this.service.getAllStructureCorp().subscribe(res => {
      this.corpStructure = res;
    });
  }

  DeleteCorp(c: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.service.deleteStructureCorp(c).subscribe(res => {
          Swal.fire('Removed!', ' removed successfully.', 'success').then((ress) => { window.location.reload(); });
        }, err => { alert('something went wrong..') });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'structure still in our database.)', 'error');
      }
    });
  }
  UpdateCorp(id: number) {

    this.router.navigate(['/structure/corpUpdate/', id]);
  }

}
