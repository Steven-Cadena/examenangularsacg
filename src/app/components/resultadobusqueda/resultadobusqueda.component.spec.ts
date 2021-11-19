import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadobusquedaComponent } from './resultadobusqueda.component';

describe('ResultadobusquedaComponent', () => {
  let component: ResultadobusquedaComponent;
  let fixture: ComponentFixture<ResultadobusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadobusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadobusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
