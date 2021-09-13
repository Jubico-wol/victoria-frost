import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseuComponent } from './museu.component';

describe('MuseuComponent', () => {
  let component: MuseuComponent;
  let fixture: ComponentFixture<MuseuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
