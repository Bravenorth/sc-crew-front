import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSignupButtonComponent } from './signin-signup-button.component';

describe('SigninSignupButtonComponent', () => {
  let component: SigninSignupButtonComponent;
  let fixture: ComponentFixture<SigninSignupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninSignupButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigninSignupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
