import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  connect = false;
  constructor(private jsonPlaceHolder : JSONPlaceholderService, private router: Router) { 
    console.log("zz")
  }

  ngOnInit(): void {
    if (localStorage.getItem('connect'))
    {
      this.connect = true;
    }

  }

  logout() {
    this.jsonPlaceHolder.logout();
    this.router.navigateByUrl('/login');
    this.connect = false;
  }

}
