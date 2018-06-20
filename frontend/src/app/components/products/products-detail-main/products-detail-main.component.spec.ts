import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailMainComponent } from './products-detail-main.component';

describe('ProductsDetailMainComponent', () => {
  let component: ProductsDetailMainComponent;
  let fixture: ComponentFixture<ProductsDetailMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDetailMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
