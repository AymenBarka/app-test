import { JSONPlaceholderService } from './services/jsonplaceholder.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardserviceGuard implements CanActivate {
  constructor(private router:Router, private service:JSONPlaceholderService) { }

  canActivate(): boolean {
    if (this.service.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
    
  }
  
}
