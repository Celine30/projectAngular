import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostHeaderComponent } from './post-header/post-header.component';

import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthComponent } from './auth/auth.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { Routes, RouterModule} from "@angular/router";
import { AuthGuard } from './services/auth-guard.service';
import { FormComponent } from './form/form.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes : Routes = [
  { path:'auth', component : AuthComponent },
  { path:'postview/:id', canActivate:[AuthGuard] , component : PostViewComponent },
  { path:'postlist', component : PostListComponent },
  { path:'userlist', component : UserListComponent },
  { path:'newuser', component : NewUserComponent },
  { path:'form', component : FormComponent },
  { path:'', component : AuthComponent },
  { path:'not-found', component : ErrorPageComponent },
  { path:'**', redirectTo : '/not-found' },


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent,
    PostListComponent,
    PostListItemComponent,
    PostHeaderComponent,
    AuthComponent,
    PostViewComponent,
    FormComponent,
    UserListComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    AuthService, 
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
