import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportPPModiferComponent } from './rapport-pp-modifer.component';

describe('RapportPPModiferComponent', () => {
  let component: RapportPPModiferComponent;
  let fixture: ComponentFixture<RapportPPModiferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportPPModiferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportPPModiferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
