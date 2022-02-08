import { TestBed } from '@angular/core/testing';

import { MysiteServerService } from './mysite-server.service';

describe('MysiteServerService', () => {
  let service: MysiteServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysiteServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
