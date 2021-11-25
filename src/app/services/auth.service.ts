import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';


const userUrl = 'http://localhost:8080/api/auth';

@Injectable({
    providedIn: 'root'
})

  export class AuthService {

    isAuth$ = new BehaviorSubject<boolean>(false);
    token?: string;
    userId?: string;

    constructor(private http: HttpClient) { }
    
    
    signup(username: string, email: string, password: string): Observable<User> {
        return this.http.post(`${userUrl}/signup`, {username, email, password});
    }

    login(email: string, password: string): void {
        this.http.post(`${userUrl}/login`, {email, password})
          .subscribe((response): void => {
            const res = JSON.parse(JSON.stringify(response));
            localStorage.setItem("user_Id", JSON.stringify(res.userId));   
            this.isAuth$.next(true);
          });
    }

    logout() {
      this.isAuth$.next(false);
    }

    getAllUsers(): Observable<User> {
      return this.http.get<User>(`${userUrl}/members`);
    }
    
    getOneUser(id: any): Observable<User> {
      return this.http.get(`${userUrl}/profil/${id}`);
    } 
}
