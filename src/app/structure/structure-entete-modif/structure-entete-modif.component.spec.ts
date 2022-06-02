import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureEnteteModifComponent } from './structure-entete-modif.component';

describe('StructureEnteteModifComponent', () => {
  let component: StructureEnteteModifComponent;
  let fixture: ComponentFixture<StructureEnteteModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureEnteteModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureEnteteModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
