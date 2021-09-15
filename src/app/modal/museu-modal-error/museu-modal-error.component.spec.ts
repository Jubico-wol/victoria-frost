import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseuModalErrorComponent } from './museu-modal-error.component';

describe('MuseuModalErrorComponent', () => {
  let component: MuseuModalErrorComponent;
  let fixture: ComponentFixture<MuseuModalErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseuModalErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseuModalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
