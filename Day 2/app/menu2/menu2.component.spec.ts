import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2Component } from './menu2.component';

describe('Menu2Component', () => {
  let component: Menu2Component;
  let fixture: ComponentFixture<Menu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
