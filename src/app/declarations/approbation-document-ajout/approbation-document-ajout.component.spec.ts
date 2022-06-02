import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprobationDocumentAjoutComponent } from './approbation-document-ajout.component';

describe('ApprobationDocumentAjoutComponent', () => {
  let component: ApprobationDocumentAjoutComponent;
  let fixture: ComponentFixture<ApprobationDocumentAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprobationDocumentAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprobationDocumentAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
