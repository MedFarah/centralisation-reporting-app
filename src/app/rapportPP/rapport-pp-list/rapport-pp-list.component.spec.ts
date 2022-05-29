import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPPListComponent } from './rapport-pp-list.component';

describe('RapportPPListComponent', () => {
  let component: RapportPPListComponent;
  let fixture: ComponentFixture<RapportPPListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPPListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPPListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
