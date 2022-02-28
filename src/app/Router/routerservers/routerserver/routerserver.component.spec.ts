import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterserverComponent } from './routerserver.component';

describe('RouterserverComponent', () => {
  let component: RouterserverComponent;
  let fixture: ComponentFixture<RouterserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
