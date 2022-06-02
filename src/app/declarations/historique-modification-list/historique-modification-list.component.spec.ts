import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueModificationListComponent } from './historique-modification-list.component';

describe('HistoriqueModificationListComponent', () => {
  let component: HistoriqueModificationListComponent;
  let fixture: ComponentFixture<HistoriqueModificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueModificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueModificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
