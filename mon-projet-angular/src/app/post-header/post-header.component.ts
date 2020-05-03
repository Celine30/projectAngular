
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import 'rxjs'


@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {

  secondes:number;
  counterSubscription:Subscription;
 

  constructor() { }

  ngOnInit(): void {

/*     const source = interval(1000);

    this.counterSubscription = source.subscribe(
      (value:number)=>{
        this.secondes = value
      }
    ); */
    

  }

  ngOnDestroy (){

    this.counterSubscription.unsubscribe()
  }

}
