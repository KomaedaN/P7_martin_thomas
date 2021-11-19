import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {


  postFocus: Post = {
  title: '',
  description: '',
  published: false,
}

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

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
}
