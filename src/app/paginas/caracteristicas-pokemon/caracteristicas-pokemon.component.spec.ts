import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasPokemonComponent } from './caracteristicas-pokemon.component';

describe('CaracteristicasPokemonComponent', () => {
  let component: CaracteristicasPokemonComponent;
  let fixture: ComponentFixture<CaracteristicasPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
