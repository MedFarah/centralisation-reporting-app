import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueModificationUpdateComponent } from './historique-modification-update.component';

describe('HistoriqueModificationUpdateComponent', () => {
  let component: HistoriqueModificationUpdateComponent;
  let fixture: ComponentFixture<HistoriqueModificationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueModificationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueModificationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
