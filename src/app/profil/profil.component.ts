import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUser = localStorage.getItem("user_Id");

  userFocus: User = {
    username: '',
    email: '',
  }

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.id);
  }

  

  getUser(id: any): void {
    this.authService.getOneUser(id)
      .subscribe( 
        data => {
          this.userFocus = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
