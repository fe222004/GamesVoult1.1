import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionGameComponent } from './navegacion-game.component';

describe('NavegacionGameComponent', () => {
  let component: NavegacionGameComponent;
  let fixture: ComponentFixture<NavegacionGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacionGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegacionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
