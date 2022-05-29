import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPMListComponent } from './rapport-pm-list.component';

describe('RapportPMListComponent', () => {
  let component: RapportPMListComponent;
  let fixture: ComponentFixture<RapportPMListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPMListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
