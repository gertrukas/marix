import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringEventosExternosComponent } from './catering-eventos-externos.component';

describe('CateringEventosExternosComponent', () => {
  let component: CateringEventosExternosComponent;
  let fixture: ComponentFixture<CateringEventosExternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateringEventosExternosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateringEventosExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
