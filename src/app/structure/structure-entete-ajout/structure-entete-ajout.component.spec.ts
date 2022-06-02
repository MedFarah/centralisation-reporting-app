import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureEnteteAjoutComponent } from './structure-entete-ajout.component';

describe('StructureEnteteAjoutComponent', () => {
  let component: StructureEnteteAjoutComponent;
  let fixture: ComponentFixture<StructureEnteteAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureEnteteAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureEnteteAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
