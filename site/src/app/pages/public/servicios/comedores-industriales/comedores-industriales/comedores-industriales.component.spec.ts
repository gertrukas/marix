import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedoresIndustrialesComponent } from './comedores-industriales.component';

describe('ComedoresIndustrialesComponent', () => {
  let component: ComedoresIndustrialesComponent;
  let fixture: ComponentFixture<ComedoresIndustrialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedoresIndustrialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComedoresIndustrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
