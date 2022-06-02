import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureEnteteListComponent } from './structure-entete-list.component';

describe('StructureEnteteListComponent', () => {
  let component: StructureEnteteListComponent;
  let fixture: ComponentFixture<StructureEnteteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureEnteteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureEnteteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
