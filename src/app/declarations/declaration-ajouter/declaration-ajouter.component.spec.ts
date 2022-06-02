import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationAjouterComponent } from './declaration-ajouter.component';

describe('DeclarationAjouterComponent', () => {
  let component: DeclarationAjouterComponent;
  let fixture: ComponentFixture<DeclarationAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationAjouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
