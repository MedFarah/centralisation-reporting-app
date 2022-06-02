import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationModfierComponent } from './declaration-modfier.component';

describe('DeclarationModfierComponent', () => {
  let component: DeclarationModfierComponent;
  let fixture: ComponentFixture<DeclarationModfierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationModfierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationModfierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
