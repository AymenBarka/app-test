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

    
  }

  ngOnInit(): void {
 
    this.jsonPlaceHolder.isconnect.subscribe(cnx => this.connect = cnx)
     
  }
  logout(){
    this.jsonPlaceHolder.logout();
   
    this.jsonPlaceHolder.isconnect.subscribe(cnx => this.connect = cnx)
  }

}
