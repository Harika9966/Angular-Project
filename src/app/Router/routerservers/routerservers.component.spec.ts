import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterserversComponent } from './routerservers.component';

describe('RouterserversComponent', () => {
  let component: RouterserversComponent;
  let fixture: ComponentFixture<RouterserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterserversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
