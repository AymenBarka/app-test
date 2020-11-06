import { JSONPlaceholderService } from './../services/jsonplaceholder.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPostComponent } from '../add-post/add-post.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  listPosts: any;
  id: number;
  post: any;
  updateUserForm: FormGroup;
  title:any;
  body:any;
  index:any;
  popoverTitle = 'Delete Post';
  popoverMessage = 'Are you sure to delete this post ?';
  confirmClicked = false;
  cancelClicked = false;
  constructor(private service: JSONPlaceholderService, private dialog: MatDialog) {
     
   }

  ngOnInit(): void {
    
    this.updateUserForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
    this.listPosts=JSON.parse(localStorage.getItem("listPost"));
    if(this.listPosts!=null)
    {
      this.listPosts=JSON.parse(localStorage.getItem("listPost"))
    }else{
      this.service.getData().subscribe(
        data => {
  
          this.listPosts = data;
          localStorage.setItem("listPost",JSON.stringify(this.listPosts));
        }
      )
    
    }
  }

  remove(i, id) {
    this.listPosts.splice(i, 1);
    this.service.delete(id).subscribe();
    localStorage.setItem("listPost",JSON.stringify(this.listPosts));
  }
 
  edit(id,index) {
    this.service.getPostById(id).subscribe(data =>{
      this.post = data;
      this.updateUserForm.setValue({title: this.post.title, body: this.post.body})
      this.body=this.post.body;
      this.title=this.post.title;
      this.index=index;
    })
  
  }
  addPost(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: '180px', 'top': '200px' };
    dialogConfig.width='500px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(AddPostComponent, dialogConfig);
  }
  updatePost() {
this.post.title=this.updateUserForm.value.title;
this.post.body=this.updateUserForm.value.body;
this.service.update(this.post).subscribe(data =>{
this.listPosts[this.index]=this.post;
localStorage.setItem("listPost",JSON.stringify(this.listPosts));
})
 
  }
}
