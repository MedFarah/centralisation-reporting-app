import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportODAjouterComponent } from './rapport-od-ajouter.component';

describe('RapportODAjouterComponent', () => {
  let component: RapportODAjouterComponent;
  let fixture: ComponentFixture<RapportODAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportODAjouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportODAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
