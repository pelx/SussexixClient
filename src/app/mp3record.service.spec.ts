import { TestBed } from '@angular/core/testing';

import { Mp3recordService } from './mp3record.service';

describe('Mp3recordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Mp3recordService = TestBed.get(Mp3recordService);
    expect(service).toBeTruthy();
  });
});
