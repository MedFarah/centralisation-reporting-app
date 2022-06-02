import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDestinataireListComponent } from './liste-destinataire-list.component';

describe('ListeDestinataireListComponent', () => {
  let component: ListeDestinataireListComponent;
  let fixture: ComponentFixture<ListeDestinataireListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDestinataireListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDestinataireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
