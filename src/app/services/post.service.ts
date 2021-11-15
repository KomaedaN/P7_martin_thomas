import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Post } from '../models/post.model'

const baseUrl = 'http://localhost:8080/api/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl);
  }

  get(id: any): Observable<Post> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<Post> {
    return this.http.post(baseUrl, data);
  }

  update(id:any , data: any): Observable<Post> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<Post> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  
  deleteAll(): Observable<Post> {
    return this.http.delete(baseUrl);
  }
}
