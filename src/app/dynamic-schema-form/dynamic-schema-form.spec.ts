import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSchemaForm } from './dynamic-schema-form';

describe('DynamicSchemaForm', () => {
  let component: DynamicSchemaForm;
  let fixture: ComponentFixture<DynamicSchemaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSchemaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSchemaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
