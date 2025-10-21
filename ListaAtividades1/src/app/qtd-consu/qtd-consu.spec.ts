import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtdConsu } from './qtd-consu';

describe('QtdConsu', () => {
  let component: QtdConsu;
  let fixture: ComponentFixture<QtdConsu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QtdConsu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QtdConsu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
