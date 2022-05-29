import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPMDetailComponent } from './rapport-pm-detail.component';

describe('RapportPMDetailComponent', () => {
  let component: RapportPMDetailComponent;
  let fixture: ComponentFixture<RapportPMDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPMDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPMDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
