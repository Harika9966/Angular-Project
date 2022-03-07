import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from './custom-validators';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  projectForm!:FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.projectForm= new FormGroup({
      'projectName': new FormControl(null,[Validators.required,customValidators.InvalidProjectName]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'projectStatus': new FormControl('critical'),
    });
  }
  onSaveProject(){
    console.log(this.projectForm.value);
  }

}
