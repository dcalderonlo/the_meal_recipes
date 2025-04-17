import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMealRandomComponent } from './the-meal-random.component';

describe('TheMealRandomComponent', () => {
  let component: TheMealRandomComponent;
  let fixture: ComponentFixture<TheMealRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMealRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheMealRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
