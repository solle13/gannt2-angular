import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gantt2Component } from './gantt2.component';

describe('Gantt2Component', () => {
  let component: Gantt2Component;
  let fixture: ComponentFixture<Gantt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gantt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gantt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
