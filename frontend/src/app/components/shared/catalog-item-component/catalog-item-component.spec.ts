import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogItemComponentComponent } from './catalog-item-component.component';

describe('CatalogItemComponentComponent', () => {
  let component: CatalogItemComponentComponent;
  let fixture: ComponentFixture<CatalogItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
