import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanellAdministradorComponent } from './panell-administrador.component';

describe('PanellAdministradorComponent', () => {
  let component: PanellAdministradorComponent;
  let fixture: ComponentFixture<PanellAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanellAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanellAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
