import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesNavegacionComponent } from './games-navegacion.component';

describe('GamesNavegacionComponent', () => {
  let component: GamesNavegacionComponent;
  let fixture: ComponentFixture<GamesNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesNavegacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
