import { TestBed } from '@angular/core/testing';

import { AyLessonsService } from './ay-lessons.service';

describe('AyLessonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AyLessonsService = TestBed.get(AyLessonsService);
    expect(service).toBeTruthy();
  });
});
