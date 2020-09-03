import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/Weather/Weather.component';
import { PostListComponent } from './pages/posts-list/posts-list.component';
import { PostCreateComponent } from './pages/post-create/post-create.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Posts', component: PostListComponent },
  { path: 'Weather', component: WeatherComponent },
  { path: 'Create', component: PostCreateComponent },
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
