import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ProfilComponent } from './profil/profil.component';
import { MembersComponent } from './members/members.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'post', component: PostComponent},
    { path: 'create-post', component: CreatePostComponent},
    { path: 'post-details/:id', component: PostDetailsComponent},
    { path: 'profil/:id', component: ProfilComponent},
    { path: 'members', component: MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }