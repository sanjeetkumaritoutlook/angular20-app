import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Result1View } from './result1-view';

describe('Result1View', () => {
  let component: Result1View;
  let fixture: ComponentFixture<Result1View>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Result1View]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Result1View);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
