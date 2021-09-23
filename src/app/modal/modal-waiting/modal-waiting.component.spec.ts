import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWaitingComponent } from './modal-waiting.component';

describe('ModalWaitingComponent', () => {
  let component: ModalWaitingComponent;
  let fixture: ComponentFixture<ModalWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
