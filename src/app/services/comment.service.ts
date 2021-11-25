import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

const commentUrl = 'http://localhost:8080/api/comment';

@Injectable({
    providedIn: 'root'
})

  export class CommentService {

    

    constructor(private http: HttpClient) { }
    
    createComment(data: any): Observable<Comment> {
      return this.http.post(commentUrl, data);
    }

    getAllComment(id: any): Observable<Comment[]> {
      return this.http.get<Comment[]>(`${commentUrl}/${id}`);
    }
  }
