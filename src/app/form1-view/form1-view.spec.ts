import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1View } from './form1-view';

describe('Form1View', () => {
  let component: Form1View;
  let fixture: ComponentFixture<Form1View>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form1View]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form1View);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
