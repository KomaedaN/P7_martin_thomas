import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {


  userFocus: User = {
    username: '',
    email: '',
  }
  currentUser = localStorage.getItem("user_Id");
  users: any;

  isAuthSub?: Subscription;
  isAuth?: Boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fecthUsers();
    this.isAuthSub = this.authService.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
      }
    );
  }

  fecthUsers(): void {
    this.authService.getAllUsers()
    .subscribe(
      username => {
        this.users = username;
        
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
