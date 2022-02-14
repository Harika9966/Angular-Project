import { 
  Component, 
  Input, 
  OnInit, 
  ViewEncapsulation,
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated //None,Native
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck , 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
 @Input('srvElement') element!: { type: string; name: string; content: string; };
 @Input() name!:string;
 @ViewChild('heading',{static: true}) header!: ElementRef;
 @ContentChild('contentParagraph',{static: true}) paragraph! : ElementRef;

  constructor() {
    console.log('constructor called!');
   }

   ngOnChanges(changes:SimpleChanges) {
     console.log('ngOnChanges called!');
     console.log(changes);
   }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content :' + this.header.nativeElement.textContent);
    console.log('TextContent of Paragraph : ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDocheck called!');
  }

  ngAfterContentInit() {
      console.log('ngAfterContentInit called!');
      console.log('TextContent of Paragraph : ' + this.paragraph.nativeElement.textContent)

  }

  ngAfterContentChecked() {
      console.log('ngAfterContentchecked Called!')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewchecked Called!');
    console.log('Text Content :' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy called!')
  }


}
