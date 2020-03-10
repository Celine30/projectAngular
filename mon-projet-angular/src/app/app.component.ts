import { Input, Component } from '@angular/core';
import { Post} from './post'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  posts = [
    new Post('Le 1er Post','Lorem',2,new Date()),
    new Post('Le 2eme Post','Lorem',2,new Date()),
    new Post('Le 3eme Post','Lorem',2,new Date()),
    new Post('Le 4eme Post','Lorem',2,new Date()),
    ]

  
  constructor() {
    
  }
}



