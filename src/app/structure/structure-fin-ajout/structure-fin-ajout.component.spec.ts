import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFinAjoutComponent } from './structure-fin-ajout.component';

describe('StructureFinAjoutComponent', () => {
  let component: StructureFinAjoutComponent;
  let fixture: ComponentFixture<StructureFinAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureFinAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureFinAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
