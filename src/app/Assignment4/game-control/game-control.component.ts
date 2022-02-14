import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval:any;
  lastnumber = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onStartGame(){
    console.log('gamestart');
    this.interval=setInterval(() => {
      this.intervalFired.emit(this.lastnumber + 1);
      this.lastnumber++;
    }, 1000);
  }
  onPauseGame(){
    clearInterval(this.interval);
  }

}
