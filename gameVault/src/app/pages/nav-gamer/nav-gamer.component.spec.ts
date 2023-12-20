import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGamerComponent } from './nav-gamer.component';

describe('NavGamerComponent', () => {
  let component: NavGamerComponent;
  let fixture: ComponentFixture<NavGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavGamerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
