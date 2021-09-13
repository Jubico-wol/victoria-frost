import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMuseuComponent } from './modal-museu.component';

describe('ModalMuseuComponent', () => {
  let component: ModalMuseuComponent;
  let fixture: ComponentFixture<ModalMuseuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMuseuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMuseuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
