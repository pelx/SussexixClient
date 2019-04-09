import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3recordsComponent } from './mp3records.component';

describe('Mp3recordsComponent', () => {
  let component: Mp3recordsComponent;
  let fixture: ComponentFixture<Mp3recordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mp3recordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp3recordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
