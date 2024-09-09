import { TestBed } from '@angular/core/testing';

import { ContactFromService } from './contact-from.service';

describe('ContactFromService', () => {
  let service: ContactFromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
