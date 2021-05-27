import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpecialSuperchargedComponentComponent } from './our-special-supercharged-component.component';

describe('OurSpecialSuperchargedComponentComponent', () => {
  let component: OurSpecialSuperchargedComponentComponent;
  let fixture: ComponentFixture<OurSpecialSuperchargedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSpecialSuperchargedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSpecialSuperchargedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
