import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesDescargasComponent } from './games-descargas.component';

describe('GamesDescargasComponent', () => {
  let component: GamesDescargasComponent;
  let fixture: ComponentFixture<GamesDescargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesDescargasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesDescargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
