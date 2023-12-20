import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegateGamerComponent } from './navegate-gamer.component';

describe('NavegateGamerComponent', () => {
  let component: NavegateGamerComponent;
  let fixture: ComponentFixture<NavegateGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegateGamerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegateGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
