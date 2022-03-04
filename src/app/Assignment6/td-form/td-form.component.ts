import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  subscriptions =['one','two','three'];
  selectedSubscription ='one';
    @ViewChild('signupForm') sgnForm!:NgForm;
    formvalues = {
      defaultSubscription: 'one',
      subitted: false,
      email: '',
      password: ''
    };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.formvalues.subitted = true;
    this.formvalues.email = this.sgnForm.value.email;
    this.formvalues.defaultSubscription = this.sgnForm.value.subscriptions;
    this.formvalues.password = this.sgnForm.value.password;
    console.log(this.formvalues);

    this.sgnForm.reset();

  }

}
