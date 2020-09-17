import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyaViewComponent } from './aya-view.component';

describe('AyaViewComponent', () => {
  let component: AyaViewComponent;
  let fixture: ComponentFixture<AyaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
