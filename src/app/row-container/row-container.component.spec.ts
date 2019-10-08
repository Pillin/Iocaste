import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowContainerComponent } from './row-container.component';

describe('RowContainerComponent', () => {
  let component: RowContainerComponent;
  let fixture: ComponentFixture<RowContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
