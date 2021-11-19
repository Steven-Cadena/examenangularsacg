import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificargeneroComponent } from './modificargenero.component';

describe('ModificargeneroComponent', () => {
  let component: ModificargeneroComponent;
  let fixture: ComponentFixture<ModificargeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificargeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificargeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
