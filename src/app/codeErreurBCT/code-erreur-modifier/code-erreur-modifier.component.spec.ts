import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeErreurModifierComponent } from './code-erreur-modifier.component';

describe('CodeErreurModifierComponent', () => {
  let component: CodeErreurModifierComponent;
  let fixture: ComponentFixture<CodeErreurModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeErreurModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeErreurModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
