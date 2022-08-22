import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoPokemonComponent } from './cabecalho-pokemon.component';

describe('CabecalhoPokemonComponent', () => {
  let component: CabecalhoPokemonComponent;
  let fixture: ComponentFixture<CabecalhoPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
