import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  //templateUrl: './warning-alert.component.html',
  template: '<p>you are in danger jone</p>',
  //styleUrls: ['./warning-alert.component.css']
  styles: [' p {background-color:navajowhite;padding: 20px; border: 1px solid red;}']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
