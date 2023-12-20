import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersComentariosComponentComponent } from './gamers-comentarios-component.component';

describe('GamersComentariosComponentComponent', () => {
  let component: GamersComentariosComponentComponent;
  let fixture: ComponentFixture<GamersComentariosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamersComentariosComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamersComentariosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
