import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTabsComponent } from './date-tabs.component';

describe('DateTabsComponent', () => {
  let component: DateTabsComponent;
  let fixture: ComponentFixture<DateTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
