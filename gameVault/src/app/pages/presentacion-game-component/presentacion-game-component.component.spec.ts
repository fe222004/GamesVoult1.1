import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionGameComponentComponent } from './presentacion-game-component.component';

describe('PresentacionGameComponentComponent', () => {
  let component: PresentacionGameComponentComponent;
  let fixture: ComponentFixture<PresentacionGameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentacionGameComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentacionGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
