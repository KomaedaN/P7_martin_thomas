import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  currentUser = localStorage.getItem("user_Id");

  isAuthSub?: Subscription;
  isAuth?: Boolean;

  constructor(private postService: PostService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.isAuthSub = this.authService.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
      }
    );
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

    onLogout() {
      this.authService.logout();
      console.log('logout');
      this.router.navigate(['/home']);
    }
  }


  


