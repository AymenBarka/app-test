import { EditPostComponent } from './../edit-post/edit-post.component';
import { JSONPlaceholderService } from './../services/jsonplaceholder.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPostComponent } from '../add-post/add-post.component';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  listPosts: any;
  id: number;
  post: any;
  constructor(private service: JSONPlaceholderService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      data => {
        this.listPosts = data;
      }
    )
  }

  remove(i, id) {
    this.listPosts.splice(i, 1);
    this.service.delete(id).subscribe();
  }
 
  edit(id) {
    this.service.getPostById(id).subscribe(data =>{
      this.post = data;
    })
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: '180px', 'top': '200px' };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(EditPostComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        this.post = data;
      }
    )
  }
  addPost(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { right: '180px', 'top': '200px' };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(AddPostComponent, dialogConfig);
  }
}
