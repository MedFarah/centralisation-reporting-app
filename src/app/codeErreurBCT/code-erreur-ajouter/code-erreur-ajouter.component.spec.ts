import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeErreurAjouterComponent } from './code-erreur-ajouter.component';

describe('CodeErreurAjouterComponent', () => {
  let component: CodeErreurAjouterComponent;
  let fixture: ComponentFixture<CodeErreurAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeErreurAjouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeErreurAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
