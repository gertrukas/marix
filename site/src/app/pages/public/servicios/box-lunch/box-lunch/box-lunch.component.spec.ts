import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLunchComponent } from './box-lunch.component';

describe('BoxLunchComponent', () => {
  let component: BoxLunchComponent;
  let fixture: ComponentFixture<BoxLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxLunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
