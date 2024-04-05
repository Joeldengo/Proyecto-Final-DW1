import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BheladasComponent } from './bheladas.component';

describe('BheladasComponent', () => {
  let component: BheladasComponent;
  let fixture: ComponentFixture<BheladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BheladasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BheladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
