import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  currentUser = localStorage.getItem("user_Id");
  users: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.fecthUsers();
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

}
