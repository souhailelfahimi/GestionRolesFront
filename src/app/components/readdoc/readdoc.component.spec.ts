import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaddocComponent } from './readdoc.component';

describe('ReaddocComponent', () => {
  let component: ReaddocComponent;
  let fixture: ComponentFixture<ReaddocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaddocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
