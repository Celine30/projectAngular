import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts = [
    {
      title: '1er Post',
      content: 'Lorem'
    },
    {
      title: '2eme Post',
      content: 'Lorem'
    },
    {
      
      title: '3eme Post',
      content: 'Lorem'
    }
  ];


  constructor() {
    
  }
}



