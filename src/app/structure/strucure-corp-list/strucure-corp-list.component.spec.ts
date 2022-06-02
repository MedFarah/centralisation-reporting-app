import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucureCorpListComponent } from './strucure-corp-list.component';

describe('StrucureCorpListComponent', () => {
  let component: StrucureCorpListComponent;
  let fixture: ComponentFixture<StrucureCorpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrucureCorpListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucureCorpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
