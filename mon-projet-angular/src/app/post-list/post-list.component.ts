import { Input,Component, OnInit } from '@angular/core';
import { Post} from '../post'
import{ PostService} from '../services/post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: any[];

  constructor( private postService : PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.posts;
  }

}
