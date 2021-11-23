import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(/[A-Za-zÀ-ÖØ-öø-ÿ ]{3,50}/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{2,}/)]]
  });

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  
  }

  register(UserData: {username: string, email: string, password: string}): void {
    this.auth.signup(UserData.email, UserData.password, UserData.username)
      .subscribe( data => {
        return data;
        console.log(data);
      })
   }

  onSubmit(): void {
    const username: string = this.registerForm?.get('username')?.value;
    const email: string = this.registerForm.get('email')?.value;
    const password: string = this.registerForm.get('password')?.value;
    this.auth.signup(username, email, password)
      .subscribe(response => {
          // utilisateur créé, il faut maintenant se connecter !
          this.auth.login(email, password);
          this.router.navigate(['/post']);
        }) 
    }
  
}
