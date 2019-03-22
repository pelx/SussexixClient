import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyLessonsComponent } from './ay-lessons.component';

describe('AyLessonsComponent', () => {
  let component: AyLessonsComponent;
  let fixture: ComponentFixture<AyLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
