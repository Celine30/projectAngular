import { Input, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postId: number;
  @Input() postPicture: string;
  @Input() postName: string;
  @Input() postContent: string;
  @Input() postBirth: string;
  @Input() postAge: string;
  @Input() postNationality: string;
  @Input() postJob: string;
  @Input() postLikeIts: string;
  

  red = false; 
  green=false;
  neutre =true;
  
  clVert(){
    this.red = false
    this.green = true
    this.neutre = false
  }

  clRouge(){
    this.green = false
    this.neutre = false
    this.red = true
  }

  
  constructor( ) { }

  ngOnInit(): void {


  }

}
