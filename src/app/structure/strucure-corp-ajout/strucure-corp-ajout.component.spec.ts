import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucureCorpAjoutComponent } from './strucure-corp-ajout.component';

describe('StrucureCorpAjoutComponent', () => {
  let component: StrucureCorpAjoutComponent;
  let fixture: ComponentFixture<StrucureCorpAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrucureCorpAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucureCorpAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
