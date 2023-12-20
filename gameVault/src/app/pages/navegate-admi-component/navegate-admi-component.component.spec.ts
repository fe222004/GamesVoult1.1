import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegateAdmiComponentComponent } from './navegate-admi-component.component';

describe('NavegateAdmiComponentComponent', () => {
  let component: NavegateAdmiComponentComponent;
  let fixture: ComponentFixture<NavegateAdmiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegateAdmiComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegateAdmiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
