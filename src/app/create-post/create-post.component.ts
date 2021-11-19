import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addPost(postdata: {title: string; description: string}): void {
    const data = {
      title: postdata.title,
      description: postdata.description
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


  


