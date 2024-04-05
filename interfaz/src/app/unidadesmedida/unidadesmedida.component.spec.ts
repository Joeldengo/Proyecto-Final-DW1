import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesmedidaComponent } from './unidadesmedida.component';

describe('UnidadesmedidaComponent', () => {
  let component: UnidadesmedidaComponent;
  let fixture: ComponentFixture<UnidadesmedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadesmedidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidadesmedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
