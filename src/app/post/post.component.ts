import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  currentPost: Post = {};

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fecthPosts();
  }


  fecthPosts(): void {
    this.postService.getAll()
    .subscribe(
      data => {
        this.posts = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
