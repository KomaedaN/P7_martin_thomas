import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{2,}/)]]
  });


  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private auth: AuthService) { }

  ngOnInit(): void {
  }

  
  onSubmit(): void {
    const { email, password } = this.login.value;
    this.auth.login(email, password);
    this.router.navigate(['/post']);
  }
}
