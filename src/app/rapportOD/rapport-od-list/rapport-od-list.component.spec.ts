import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportODListComponent } from './rapport-od-list.component';

describe('RapportODListComponent', () => {
  let component: RapportODListComponent;
  let fixture: ComponentFixture<RapportODListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportODListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportODListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
