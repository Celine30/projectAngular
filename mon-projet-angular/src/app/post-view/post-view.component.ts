import { Component, OnInit } from '@angular/core';
import { PostService} from "../services/post.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  idPost: string
  posts: any[]

  constructor(private postService : PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idPost = this.route.snapshot.params['id']
    this.posts = this.postService.posts
  }

}
