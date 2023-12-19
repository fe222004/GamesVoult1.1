import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPresentacionComponent } from './games-presentacion.component';

describe('GamesPresentacionComponent', () => {
  let component: GamesPresentacionComponent;
  let fixture: ComponentFixture<GamesPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesPresentacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
