import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcalientesComponent } from './bcalientes.component';

describe('BcalientesComponent', () => {
  let component: BcalientesComponent;
  let fixture: ComponentFixture<BcalientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcalientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcalientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
