import { Input, Component, OnInit } from '@angular/core';
import { getLocaleDayNames } from '@angular/common';
/* import { Post} from '../post' */


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {


  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: string; 
  @Input() postCreated_at: Date; 



  
/*   public post =  new Post(
    'Le 1er Post',
    'Lorem',
    1,
    new Date(),
    ); */




  constructor() { }

  ngOnInit(): void { }

}
