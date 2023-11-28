import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargasGameComponentComponent } from './descargas-game-component.component';

describe('DescargasGameComponentComponent', () => {
  let component: DescargasGameComponentComponent;
  let fixture: ComponentFixture<DescargasGameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescargasGameComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescargasGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
