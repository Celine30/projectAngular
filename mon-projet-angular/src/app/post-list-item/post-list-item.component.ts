import { Input, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikeIts: string;
  @Input() postDateCreated: string;


  red = false; 
  green=false;
  neutre =true;
  
  clVert(){
    console.log("red")
    this.red = true
    this.green = false
    this.neutre = false
  }

  clRouge(){
    console.log("green")
    this.green = true
    this.neutre = false
    this.red = false
  }

  
  constructor( ) { }

  ngOnInit(): void {


  }

}
