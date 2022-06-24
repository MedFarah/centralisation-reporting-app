import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthentificationService } from './services/authentification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'centralisation-reporting-app';
  logged!:boolean;
  id:any;
  username : any;
constructor(private route:Router,private authService:AuthentificationService){}
  ngOnInit(): void {
    this.logged=this.authService.isAuthenticated();
    this.username = localStorage.getItem('username');
    this.loadScript('../assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
    this.loadScript('../assets/vendor/jquery-easing/jquery.easing.min.js');
     this.loadScript('../assets/js/sb-admin-2.min.js');
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/auth');
    window.location.reload();
  }

  deleteProfile(){
     this.id = localStorage.getItem('username');
     console.log(this.id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.authService.deleteUser(this.id,localStorage.getItem('token')).subscribe(res=>{
          console.log(res);
          Swal.fire('Removed!', 'Profile removed successfully.', 'success').then((ress)=>{
            localStorage.removeItem('token');
            window.location.reload();});
        },err=>
        {alert('something went wrong..'+err)});
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'profile still in our database.)', 'error');
      }
    });
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
