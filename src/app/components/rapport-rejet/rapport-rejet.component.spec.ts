import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportRejetComponent } from './rapport-rejet.component';

describe('RapportRejetComponent', () => {
  let component: RapportRejetComponent;
  let fixture: ComponentFixture<RapportRejetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportRejetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportRejetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
