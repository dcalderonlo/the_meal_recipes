import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMealSearchComponent } from './the-meal-search.component';

describe('TheMealSearchComponent', () => {
  let component: TheMealSearchComponent;
  let fixture: ComponentFixture<TheMealSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMealSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheMealSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
