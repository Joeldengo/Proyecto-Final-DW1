import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaseaosasComponent } from './gaseaosas.component';

describe('GaseaosasComponent', () => {
  let component: GaseaosasComponent;
  let fixture: ComponentFixture<GaseaosasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaseaosasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaseaosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
