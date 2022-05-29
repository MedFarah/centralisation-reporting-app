import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPMAjoutComponent } from './rapport-pm-ajout.component';

describe('RapportPMAjoutComponent', () => {
  let component: RapportPMAjoutComponent;
  let fixture: ComponentFixture<RapportPMAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPMAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPMAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
