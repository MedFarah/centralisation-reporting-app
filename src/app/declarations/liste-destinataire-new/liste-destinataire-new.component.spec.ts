import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDestinataireNewComponent } from './liste-destinataire-new.component';

describe('ListeDestinataireNewComponent', () => {
  let component: ListeDestinataireNewComponent;
  let fixture: ComponentFixture<ListeDestinataireNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDestinataireNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDestinataireNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
