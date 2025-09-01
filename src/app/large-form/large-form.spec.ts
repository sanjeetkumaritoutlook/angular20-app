import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeForm } from './large-form';

describe('LargeForm', () => {
  let component: LargeForm;
  let fixture: ComponentFixture<LargeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
