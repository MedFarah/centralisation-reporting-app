import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPMRejetComponent } from './rapport-pmrejet.component';

describe('RapportPMRejetComponent', () => {
  let component: RapportPMRejetComponent;
  let fixture: ComponentFixture<RapportPMRejetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPMRejetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPMRejetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
