import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

const commentUrl = 'http://localhost:8080/api/comment';

@Injectable({
    providedIn: 'root'
})

  export class AuthService {

    

    constructor(private http: HttpClient) { }
    
    
  }
