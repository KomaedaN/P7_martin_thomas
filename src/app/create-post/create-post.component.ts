import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  

  constructor(private postService: PostService) { }

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
      },
      error => {
        console.log(error);
      });
    };
  }

  // navigatePost(){
  //   this.router.navigate(['/post']);
  // }
  


