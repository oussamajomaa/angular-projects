import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAyaComponent } from './one-aya.component';

describe('OneAyaComponent', () => {
  let component: OneAyaComponent;
  let fixture: ComponentFixture<OneAyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneAyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
