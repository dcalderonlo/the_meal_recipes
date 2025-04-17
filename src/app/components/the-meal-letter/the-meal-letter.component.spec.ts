import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMealLetterComponent } from './the-meal-letter.component';

describe('TheMealLetterComponent', () => {
  let component: TheMealLetterComponent;
  let fixture: ComponentFixture<TheMealLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMealLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheMealLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
