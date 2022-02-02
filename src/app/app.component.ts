import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret=false;
  title = 'my angular-app';
  log = [0];

  onToggleDetails(){
    this.showSecret= !this.showSecret;
    this.log.push(this.log.length+0);
  }
}
