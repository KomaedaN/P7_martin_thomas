import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService } from '../services/comment.service';
import { Comment } from'../models/comment.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  currentUser = localStorage.getItem("user_Id");
  comments: Comment[] = [];
  posts: Post[] = [];
  currentPost: Post = {};

  isAuthSub?: Subscription;
  isAuth?: Boolean;

  constructor(private postService: PostService,
              private authService: AuthService,
              private commentService: CommentService,
              private router: Router) { }

  ngOnInit(): void {
    this.fecthPosts();
    this.isAuthSub = this.authService.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
      }
    );
  }


  fecthPosts(): void {
    this.postService.getAll()
    .subscribe(
      data => {
        this.posts = data;
        // this.posts.forEach(post => {
        //   this.getAllComment(post.id)
        //   post.comments = this.comments;
        // });
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  onLogout() {
    this.authService.logout();
    console.log('logout');
    this.router.navigate(['/home']);
  }

  getAllComment(id: any): void {
    this.commentService.getAllComment(id)
    .subscribe(
      data => {
        this.comments = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  addComment(commentdata: {content: string; post_id: string; user_id: number}): void {
    const data = {
      content: commentdata.content,
      post_id: commentdata.post_id,
      user_id: localStorage.getItem('user_Id')
    };
    
    this.commentService.createComment(data)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
    };

}
