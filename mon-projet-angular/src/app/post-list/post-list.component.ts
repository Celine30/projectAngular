import { Input,Component, OnInit } from '@angular/core';
import { Post} from '../post'
import{ PostService} from '../services/post.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  posts: any[];
  postSubscription: Subscription;

  constructor( private postService : PostService) { }

  ngOnInit(): void {

    this.postSubscription = this.postService.postSubject.subscribe(
      (posts:any[])=>{
        this.posts = posts
      }
    );
    this.postService.emitPostSubject()
  }

}
