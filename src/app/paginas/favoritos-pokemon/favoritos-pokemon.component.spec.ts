import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosPokemonComponent } from './favoritos-pokemon.component';

describe('FavoritosPokemonComponent', () => {
  let component: FavoritosPokemonComponent;
  let fixture: ComponentFixture<FavoritosPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritosPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
