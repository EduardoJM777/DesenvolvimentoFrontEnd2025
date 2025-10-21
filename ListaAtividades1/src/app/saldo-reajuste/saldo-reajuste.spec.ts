import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoReajuste } from './saldo-reajuste';

describe('SaldoReajuste', () => {
  let component: SaldoReajuste;
  let fixture: ComponentFixture<SaldoReajuste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaldoReajuste]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoReajuste);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
