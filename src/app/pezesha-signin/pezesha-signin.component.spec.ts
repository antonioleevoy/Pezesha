import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PezeshaSigninComponent } from './pezesha-signin.component';

describe('PezeshaSigninComponent', () => {
  let component: PezeshaSigninComponent;
  let fixture: ComponentFixture<PezeshaSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PezeshaSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PezeshaSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
