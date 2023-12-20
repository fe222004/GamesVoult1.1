import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionGameComponent } from './presentacion-game.component';

describe('PresentacionGameComponent', () => {
  let component: PresentacionGameComponent;
  let fixture: ComponentFixture<PresentacionGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentacionGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentacionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
