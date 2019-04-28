import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { ComparateurComponent } from './comparateur.component';

describe('ComparateurComponent', () => {
  let component: ComparateurComponent;
  let fixture: ComponentFixture<ComparateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparateurComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
