import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportODModifierComponent } from './rapport-od-modifier.component';

describe('RapportODModifierComponent', () => {
  let component: RapportODModifierComponent;
  let fixture: ComponentFixture<RapportODModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportODModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportODModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
