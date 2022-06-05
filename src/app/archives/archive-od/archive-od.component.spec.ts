import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveODComponent } from './archive-od.component';

describe('ArchiveODComponent', () => {
  let component: ArchiveODComponent;
  let fixture: ComponentFixture<ArchiveODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveODComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
