import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportODDetailComponent } from './rapport-od-detail.component';

describe('RapportODDetailComponent', () => {
  let component: RapportODDetailComponent;
  let fixture: ComponentFixture<RapportODDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportODDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportODDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
