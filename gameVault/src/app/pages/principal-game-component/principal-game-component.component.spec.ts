import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalGameComponentComponent } from './principal-game-component.component';

describe('PrincipalGameComponentComponent', () => {
  let component: PrincipalGameComponentComponent;
  let fixture: ComponentFixture<PrincipalGameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalGameComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
