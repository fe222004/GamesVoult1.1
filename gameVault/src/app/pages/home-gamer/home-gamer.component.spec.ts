import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGamerComponent } from './home-gamer.component';

describe('HomeGamerComponent', () => {
  let component: HomeGamerComponent;
  let fixture: ComponentFixture<HomeGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGamerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
