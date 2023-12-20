import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesRequisitosComponentComponent } from './games-requisitos-component.component';

describe('GamesRequisitosComponentComponent', () => {
  let component: GamesRequisitosComponentComponent;
  let fixture: ComponentFixture<GamesRequisitosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesRequisitosComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesRequisitosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
