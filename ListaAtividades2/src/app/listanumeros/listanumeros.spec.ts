import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listanumeros } from './listanumeros';

describe('Listanumeros', () => {
  let component: Listanumeros;
  let fixture: ComponentFixture<Listanumeros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listanumeros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listanumeros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
