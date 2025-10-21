import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorNomes } from './contador-nomes';

describe('ContadorNomes', () => {
  let component: ContadorNomes;
  let fixture: ComponentFixture<ContadorNomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorNomes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorNomes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
