import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornaMaior } from './retorna-maior';

describe('RetornaMaior', () => {
  let component: RetornaMaior;
  let fixture: ComponentFixture<RetornaMaior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetornaMaior]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetornaMaior);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
