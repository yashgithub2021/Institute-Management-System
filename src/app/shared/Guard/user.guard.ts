import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private route:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  {
      if(!!sessionStorage.getItem('users')){
        return true
      }else if (!!sessionStorage.getItem('admin')) {
        return true;
        
      } else {
        this.route.navigate(['']);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Login First!',
        });
        
        return false;
        
      }


      
  }
  
}
