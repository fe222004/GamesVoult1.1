import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargasGameComponent } from './descargas-game.component';

describe('DescargasGameComponent', () => {
  let component: DescargasGameComponent;
  let fixture: ComponentFixture<DescargasGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescargasGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescargasGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
