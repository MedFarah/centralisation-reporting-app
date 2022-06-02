import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprobationDocumentModifierComponent } from './approbation-document-modifier.component';

describe('ApprobationDocumentModifierComponent', () => {
  let component: ApprobationDocumentModifierComponent;
  let fixture: ComponentFixture<ApprobationDocumentModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprobationDocumentModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprobationDocumentModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
