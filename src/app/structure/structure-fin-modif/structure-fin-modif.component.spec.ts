import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFinModifComponent } from './structure-fin-modif.component';

describe('StructureFinModifComponent', () => {
  let component: StructureFinModifComponent;
  let fixture: ComponentFixture<StructureFinModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureFinModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureFinModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
