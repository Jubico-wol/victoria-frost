import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseuModalSuccessComponent } from './museu-modal-success.component';

describe('MuseuModalSuccessComponent', () => {
  let component: MuseuModalSuccessComponent;
  let fixture: ComponentFixture<MuseuModalSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseuModalSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseuModalSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
