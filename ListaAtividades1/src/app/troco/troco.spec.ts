import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocoComponent } from './troco';

describe('Troco', () => {
  let component: TrocoComponent;
  let fixture: ComponentFixture<TrocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrocoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
