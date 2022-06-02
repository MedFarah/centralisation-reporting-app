import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucureCorpModifComponent } from './strucure-corp-modif.component';

describe('StrucureCorpModifComponent', () => {
  let component: StrucureCorpModifComponent;
  let fixture: ComponentFixture<StrucureCorpModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrucureCorpModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucureCorpModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
