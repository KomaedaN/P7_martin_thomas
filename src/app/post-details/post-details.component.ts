import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {


  currentUser = localStorage.getItem("user_Id");
  
  
  postFocus: Post = {
  title: '',
  description: '',
  published: false,
  user_id: 0,
}

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getPost(this.route.snapshot.params.id);
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
}
