import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePPComponent } from './archive-pp.component';

describe('ArchivePPComponent', () => {
  let component: ArchivePPComponent;
  let fixture: ComponentFixture<ArchivePPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivePPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
