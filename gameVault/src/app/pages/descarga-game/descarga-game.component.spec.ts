import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaGameComponent } from './descarga-game.component';

describe('DescargaGameComponent', () => {
  let component: DescargaGameComponent;
  let fixture: ComponentFixture<DescargaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescargaGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescargaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
