import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueModificationNewComponent } from './historique-modification-new.component';

describe('HistoriqueModificationNewComponent', () => {
  let component: HistoriqueModificationNewComponent;
  let fixture: ComponentFixture<HistoriqueModificationNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueModificationNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueModificationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
