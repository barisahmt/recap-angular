import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourAddComponent } from './colour-add.component';

describe('ColourAddComponent', () => {
  let component: ColourAddComponent;
  let fixture: ComponentFixture<ColourAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColourAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColourAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
