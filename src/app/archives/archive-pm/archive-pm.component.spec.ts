import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePMComponent } from './archive-pm.component';

describe('ArchivePMComponent', () => {
  let component: ArchivePMComponent;
  let fixture: ComponentFixture<ArchivePMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivePMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
