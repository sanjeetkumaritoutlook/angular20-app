import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rte } from './rte';

describe('Rte', () => {
  let component: Rte;
  let fixture: ComponentFixture<Rte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
