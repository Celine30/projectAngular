import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ PostService} from '../services/post.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor( private postService : PostService, 
    private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    const name = form.value['name'];
    const picture = form.value['picture'];
    const content = form.value['content'];
    const birth = form.value['birth'];
    const age = form.value['age'];
    const nationality = form.value['nationality'];
    const job = form.value['job'];
    this.postService.addActor(name,picture,birth,age,nationality,job, content)
    this.router.navigate(['/postlist'])
  }

}
