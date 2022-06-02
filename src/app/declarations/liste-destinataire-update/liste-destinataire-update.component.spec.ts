import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDestinataireUpdateComponent } from './liste-destinataire-update.component';

describe('ListeDestinataireUpdateComponent', () => {
  let component: ListeDestinataireUpdateComponent;
  let fixture: ComponentFixture<ListeDestinataireUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDestinataireUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDestinataireUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
