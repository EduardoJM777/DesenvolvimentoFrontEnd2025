import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soma } from './soma';

describe('Soma', () => {
  let component: Soma;
  let fixture: ComponentFixture<Soma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Soma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
