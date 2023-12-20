import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersRolComponentComponent } from './gamers-rol-component.component';

describe('GamersRolComponentComponent', () => {
  let component: GamersRolComponentComponent;
  let fixture: ComponentFixture<GamersRolComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamersRolComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamersRolComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
