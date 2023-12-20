import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesGeneroComponentComponent } from './games-genero-component.component';

describe('GamesGeneroComponentComponent', () => {
  let component: GamesGeneroComponentComponent;
  let fixture: ComponentFixture<GamesGeneroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesGeneroComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesGeneroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
