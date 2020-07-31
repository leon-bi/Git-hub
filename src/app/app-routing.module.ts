import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubUserComponent} from './github-user/github-user.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
 
  { path:'search',component:GithubUserComponent },
  { path:'home', component:HomeComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }