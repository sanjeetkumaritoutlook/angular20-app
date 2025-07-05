import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricUi } from './fabric-ui';

describe('FabricUi', () => {
  let component: FabricUi;
  let fixture: ComponentFixture<FabricUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
