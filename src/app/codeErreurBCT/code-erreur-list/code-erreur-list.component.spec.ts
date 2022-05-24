import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeErreurListComponent } from './code-erreur-list.component';

describe('CodeErreurListComponent', () => {
  let component: CodeErreurListComponent;
  let fixture: ComponentFixture<CodeErreurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeErreurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeErreurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
