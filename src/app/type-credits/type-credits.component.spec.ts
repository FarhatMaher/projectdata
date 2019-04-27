import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCreditsComponent } from './type-credits.component';

describe('TypeCreditsComponent', () => {
  let component: TypeCreditsComponent;
  let fixture: ComponentFixture<TypeCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
