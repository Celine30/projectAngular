import { Input, Component } from '@angular/core';
/* import { Post} from './post' */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  posts = [
    {
      title: 'Le 1er Post',
      content: 'Lorem',
      /* loveIts: 1, */
      created_at: new Date(),
    },
    {
      title: 'Le 2em Post',
      content: 'Lorem',
     /*  loveIts: 1, */
      created_at: new Date(),
    },
    {
      title: 'Le 3em Post',
      content: 'Lorem',
      /* loveIts: 1, */
      created_at: new Date(),
    }
  ]


  constructor() {
    
  }
}



