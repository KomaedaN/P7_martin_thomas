import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  role?: number;
  currentUser?: number;
  
  user: User['isAdmin'];
  postFocus: Post = {
  title: '',
  description: '',
  published: false,
  user_id: 0,
}

isAuthSub?: Subscription;
isAuth?: Boolean;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPost(this.route.snapshot.params.id);
    const current = localStorage.getItem("user_Id");
    if (current != null){this.currentUser = parseInt(current)};
    this.isAuthSub = this.authService.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
      }
    );
    const currentRole = localStorage.getItem("Admin");
    if (currentRole != null){this.role = parseInt(currentRole)};

  }

  getPost(id: string): void {
    this.postService.get(id)
      .subscribe(
        data => {
          this.postFocus = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }

  updatePost(): void {
    this.postService.update(this.postFocus.id, this.postFocus)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/post']);
        }
      )
  }

  deletePost(): void {
    this.postService.delete(this.postFocus.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/post']);
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
