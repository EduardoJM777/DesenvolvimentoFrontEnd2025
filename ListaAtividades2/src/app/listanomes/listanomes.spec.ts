import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listanomes } from './listanomes';

describe('Listanomes', () => {
  let component: Listanomes;
  let fixture: ComponentFixture<Listanomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listanomes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listanomes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
