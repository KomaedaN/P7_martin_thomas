import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  role?: number;
  currentUser = localStorage.getItem("user_Id");
  
  user: User['isAdmin'];
  posts: Post[] = [];
  currentPost: Post = {};
  
  isAuthSub?: Subscription;
  isAuth?: Boolean;

  constructor(private postService: PostService,
              private authService: AuthService,
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

}
