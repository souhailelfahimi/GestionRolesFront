import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermessionsComponent } from './permessions.component';

describe('PermessionsComponent', () => {
  let component: PermessionsComponent;
  let fixture: ComponentFixture<PermessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
