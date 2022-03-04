import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f') signupForm!:NgForm;
  defaultquestion='teacher';
  answer='';
  genders=['male','female'];

  user={
    username: '',
    email: '',
    secretquestion: '',
    answer:'',
    gender:''
  }
  submitted=false;
  suggestUserName(){
    const suggestUserName='harika';
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestUserName,
    //     email:'',
    //   },
    //   secret:'pet',
    //   questionanswer:'',
    //   gender:'female'
    // });
    this.signupForm.form.patchValue({
      userData:{
        username:suggestUserName
      }
    });
  }

  constructor() { }

  ngOnInit(): void {

  }
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    //console.log(this.signupForm);
    this.submitted=true;
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secretquestion=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.questionanswer;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.reset();
    
  }

}
