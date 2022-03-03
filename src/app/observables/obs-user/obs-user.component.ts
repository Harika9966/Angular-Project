import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ObsUserServive } from '../obs-user.service';

@Component({
  selector: 'app-obs-user',
  templateUrl: './obs-user.component.html',
  styleUrls: ['./obs-user.component.css']
})
export class ObsUserComponent implements OnInit {
  id!: number;
  constructor(private route: ActivatedRoute,private obsuserService:ObsUserServive) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
     this.id=params['id'];
  });
}
onActivate(){
  // this.obsuserService.activatedEmitter.emit(true);
  this.obsuserService.activatedEmitter.next(true);
}

}
