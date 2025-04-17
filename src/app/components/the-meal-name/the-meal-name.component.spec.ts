import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMealNameComponent } from './the-meal-name.component';

describe('TheMealNameComponent', () => {
  let component: TheMealNameComponent;
  let fixture: ComponentFixture<TheMealNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMealNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheMealNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
