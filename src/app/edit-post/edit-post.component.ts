import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  updateUserForm: FormGroup;
  post: any;
  id: number;
  constructor(private service: JSONPlaceholderService, private dialogRef: MatDialogRef<EditPostComponent>) { }

  ngOnInit(): void {
    this.updateUserForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
     this.service.getPostById(this.id).subscribe(data =>{
       this.post = data;
     })
  }

  updatePost() {

  }

  close() {
    this.dialogRef.close()
  }
}
