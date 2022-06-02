import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFinListComponent } from './structure-fin-list.component';

describe('StructureFinListComponent', () => {
  let component: StructureFinListComponent;
  let fixture: ComponentFixture<StructureFinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureFinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureFinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
