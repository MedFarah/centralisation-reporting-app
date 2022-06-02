import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprobationDocumentListComponent } from './approbation-document-list.component';

describe('ApprobationDocumentListComponent', () => {
  let component: ApprobationDocumentListComponent;
  let fixture: ComponentFixture<ApprobationDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprobationDocumentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprobationDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
