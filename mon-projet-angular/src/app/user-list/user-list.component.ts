import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import{ UserService} from '../services/user.service'
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit, OnDestroy{

  users:User[]
  userSubscription : Subscription;
 

  constructor( private userservice:UserService  ) { }

  ngOnInit(): void {
      this.userSubscription = this.userservice.userSubject.subscribe(
        (users:User[]) => {
          this.users = users
        }
      );
      this.userservice.emitUserSubject()
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe()
  }

}


