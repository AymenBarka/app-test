import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Posts } from '../posts';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addForm: FormGroup;

  constructor(private service : JSONPlaceholderService,
              private dialogRef: MatDialogRef<AddPostComponent>) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),

    });
  }
  add(){
    var opts = new Posts();
    opts.userId = this.addForm.value.userId;
    opts.title = this.addForm.value.title;
    opts.body = this.addForm.value.body;
    this.service.add(opts).subscribe(
      data=>{
        let listpost=JSON.parse(localStorage.getItem("listPost"));
        listpost.push(data)
        localStorage.setItem("listPost",JSON.stringify(listpost));
      }
    );

   
    this.close();
  }
  close(){
    this.dialogRef.close()
  }
}
