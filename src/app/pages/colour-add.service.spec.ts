import { TestBed } from '@angular/core/testing';

import { ColourAddService } from './colour-add.service';

describe('ColourAddService', () => {
  let service: ColourAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColourAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
