import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTrend } from './price-trend';

describe('PriceTrend', () => {
  let component: PriceTrend;
  let fixture: ComponentFixture<PriceTrend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceTrend],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceTrend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
