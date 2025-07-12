import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamples } from './new-examples';

describe('NewExamples', () => {
  let component: NewExamples;
  let fixture: ComponentFixture<NewExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewExamples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExamples);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
