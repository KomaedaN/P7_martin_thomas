import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  currentUser = localStorage.getItem("user_Id");

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addPost(postdata: {title: string; description: string; user_id: number}): void {
    const data = {
      title: postdata.title,
      description: postdata.description,
      user_id: localStorage.getItem('user_Id')
    };
    
    this.postService.create(data)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/post']);
      },
      error => {
        console.log(error);
      });
    };
  }


  


