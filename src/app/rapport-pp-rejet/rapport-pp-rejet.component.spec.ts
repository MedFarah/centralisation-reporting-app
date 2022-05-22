import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPPRejetComponent } from './rapport-pp-rejet.component';

describe('RapportPPRejetComponent', () => {
  let component: RapportPPRejetComponent;
  let fixture: ComponentFixture<RapportPPRejetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPPRejetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPPRejetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
