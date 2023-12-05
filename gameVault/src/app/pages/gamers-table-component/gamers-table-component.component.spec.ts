import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersTableComponentComponent } from './gamers-table-component.component';

describe('GamersTableComponentComponent', () => {
  let component: GamersTableComponentComponent;
  let fixture: ComponentFixture<GamersTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamersTableComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamersTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
