import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuInmuebleComponent } from './formu-inmueble.component';

describe('FormuInmuebleComponent', () => {
  let component: FormuInmuebleComponent;
  let fixture: ComponentFixture<FormuInmuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuInmuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
