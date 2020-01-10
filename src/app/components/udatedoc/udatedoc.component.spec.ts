import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdatedocComponent } from './udatedoc.component';

describe('UdatedocComponent', () => {
  let component: UdatedocComponent;
  let fixture: ComponentFixture<UdatedocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdatedocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdatedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
