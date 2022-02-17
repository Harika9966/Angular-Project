import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  //binding to directive properties
  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='blue';

  //hostBinding to bind to host properties 
   //@HostBinding('style.backgroundColor') backgroundColor: string ='transparent';
   @HostBinding('style.backgroundColor') backgroundColor: string =this.defaultColor;
   
  constructor(private elref:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    //renderer
      this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
  }

  //hostlister to listen to hostevents
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
    //this.backgroundColor ='blue';
    this.backgroundColor =this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elref.nativeElement,'background-color','black');
    this.backgroundColor ='transparent';
    this.backgroundColor =this.defaultColor;

  }

}
  