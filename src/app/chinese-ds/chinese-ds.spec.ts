import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseDs } from './chinese-ds';

describe('ChineseDs', () => {
  let component: ChineseDs;
  let fixture: ComponentFixture<ChineseDs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChineseDs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChineseDs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
