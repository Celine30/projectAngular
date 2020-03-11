import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authstatus : boolean;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authstatus = this.authService.isAuth
  }

  onsignIn(){
    this.authService.signIn().then(
      ()=>{
        this.authstatus = this.authService.isAuth;
        this.router.navigate(['postlist']);
        console.log(this.authstatus);
      }
    )
  }

  onsignOut(){
    this.authService.signOut();
    this.authstatus = this.authService.isAuth
  }

}
