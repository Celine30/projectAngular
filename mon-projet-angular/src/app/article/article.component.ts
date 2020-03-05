import { Input, Component, OnInit } from '@angular/core';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;

  constructor() { }

  ngOnInit(): void {
  }

}

