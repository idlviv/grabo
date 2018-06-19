import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBriefComponent } from './products-brief.component';

describe('ProductsBriefComponent', () => {
  let component: ProductsBriefComponent;
  let fixture: ComponentFixture<ProductsBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
