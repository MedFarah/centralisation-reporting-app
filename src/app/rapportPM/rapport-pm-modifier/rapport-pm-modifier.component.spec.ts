import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPMModifierComponent } from './rapport-pm-modifier.component';

describe('RapportPMModifierComponent', () => {
  let component: RapportPMModifierComponent;
  let fixture: ComponentFixture<RapportPMModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPMModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPMModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
