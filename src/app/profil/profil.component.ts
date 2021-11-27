import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  role?: number;
  userDetails?: User;

  currentRole = localStorage.getItem("isAdmin");
  currentUser = localStorage.getItem("user_Id");
  userRole: User['isAdmin'];
  userFocus: User = {
    username: '',
    email: '',
  }

  isAuthSub?: Subscription;
  isAuth?: Boolean;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.id);
    this.isAuthSub = this.authService.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
      }
    );
    const currentRole = localStorage.getItem("Admin");
    if (currentRole != null){this.role = parseInt(currentRole)};
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

  deleteUser(id: number) {
    this.authService.delete(this.userFocus.id)
        .subscribe(
          response => {
          console.log(response)
          if(this.role == 1) {
            this.router.navigate(['/post']);
          } else{
          this.router.navigate(['/home']);
          }})
    }
      
  


  onLogout() {
    this.authService.logout();
    console.log('logout');
    this.router.navigate(['/home']);
  }

}
