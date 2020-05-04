import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm : FormGroup

  constructor(private formBuilder : FormBuilder, 
              private userService: UserService,
              private router : Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      actorPref: ['',Validators.required],
      hobbies : this.formBuilder.array([])
      
    })
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    console.log(formValue)
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['actorPref'],
      formValue['hobbies']? formValue['hobbies']:[]
    )
    this.userService.addUser(newUser);
    this.router.navigate(['/userlist'])
  }

  getHobbies(){
    return this.userForm.get('hobbies')as FormArray
  }

  onAddHobby(){
    const newHobbyControl = this.formBuilder.control('', Validators.required)
    this.getHobbies().push(newHobbyControl)
    }

}
