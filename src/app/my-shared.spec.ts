import { TestBed } from '@angular/core/testing';

import { MyShared } from './my-shared';

describe('MyShared', () => {
  let service: MyShared;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyShared);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
