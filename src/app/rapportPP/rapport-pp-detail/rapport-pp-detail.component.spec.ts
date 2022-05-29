import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPPDetailComponent } from './rapport-pp-detail.component';

describe('RapportPPDetailComponent', () => {
  let component: RapportPPDetailComponent;
  let fixture: ComponentFixture<RapportPPDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPPDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPPDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
