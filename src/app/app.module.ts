import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import {DeactivatorService} from "./services/deactivator.service";

let routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent,
    children:
      [
        {path:':id',component:UserDetailsComponent}
        ]
  },
  {path:'posts',component:PostsComponent,canDeactivate:[DeactivatorService]},
  {path:'posts/:id',component:PostDetailsComponent,canActivate:[DeactivatorService]}
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
