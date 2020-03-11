import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostHeaderComponent } from './post-header/post-header.component';

import { PostService } from './services/post.service';
import { AuthComponent } from './auth/auth.component';
import { PostViewComponent } from './post-view/post-view.component';
import { Routes, RouterModule} from "@angular/router";

const appRoutes : Routes = [
  { path:'auth', component : AuthComponent },
  { path:'postview', component : PostViewComponent },
  { path:'listpostview', component : PostListComponent },
  { path:'', component : AuthComponent }

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
