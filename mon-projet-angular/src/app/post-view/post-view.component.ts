import { Component, OnInit } from '@angular/core';
import { PostService} from "../services/post.service"

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

}
