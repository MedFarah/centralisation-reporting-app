import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPPAjoutComponent } from './rapport-pp-ajout.component';

describe('RapportPPAjoutComponent', () => {
  let component: RapportPPAjoutComponent;
  let fixture: ComponentFixture<RapportPPAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPPAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPPAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
