import { Posts } from './../posts';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {
  @Output() isconnect: EventEmitter<any> = new EventEmitter();
  list = JSON.parse(localStorage.getItem('listusers')) || [];
  connect = JSON.parse(localStorage.getItem('connect')) || {};
 
   constructor(private http: HttpClient, private route: Router) { 

    this.isconnect.emit(false);
   }

  register(user) {
    this.list.push(user);
    localStorage.setItem('listusers', JSON.stringify(this.list));
    this.route.navigateByUrl('/login');
  }

  login(user) {
    for (let i = 0; i < this.list.length; i++) {
      if ((user.username === this.list[i].username) && (user.password === this.list[i].password)) {
        this.connect = this.list[i];
        localStorage.setItem('connect', JSON.stringify(this.connect));
        this.isconnect.emit(true);
        this.route.navigateByUrl('/posts');
      }
    }
  }

  getData(): Observable<any> {

    const url = "https://jsonplaceholder.typicode.com/users/1/posts"

    return this.http.get<any>(url)
  }

  getPostById(id): Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts/"+ `${id}`);
  }

  delete(id):Observable<any>{
   return  this.http.delete("https://jsonplaceholder.typicode.com/posts/"+ `${id}`);
  }
  add(opost:Posts):Observable<any>{
    return this.http.post("https://jsonplaceholder.typicode.com/posts",opost);
  }

  update(opost:Posts):Observable<any>{
   return this.http.put("https://jsonplaceholder.typicode.com/posts/"+opost.id , opost );
  }

  loggedIn(){
    return localStorage.getItem('connect');
  }
  logout(){
    localStorage.removeItem('connect');
    this.isconnect.emit(false);
  }
}
