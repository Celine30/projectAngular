import { Component, OnInit } from '@angular/core';
import { PostService} from "../services/post.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  
  idPost: number;
  post: any[]


  constructor(private postService : PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id']
    this.post = [this.postService.getPostById(+id)]
  }

}
