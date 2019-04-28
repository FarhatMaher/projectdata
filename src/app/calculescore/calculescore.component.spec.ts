import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculescoreComponent } from './calculescore.component';

describe('CalculescoreComponent', () => {
  let component: CalculescoreComponent;
  let fixture: ComponentFixture<CalculescoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculescoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
