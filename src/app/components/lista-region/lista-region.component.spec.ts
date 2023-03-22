import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegionComponent } from './lista-region.component';

describe('ListaRegionComponent', () => {
  let component: ListaRegionComponent;
  let fixture: ComponentFixture<ListaRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
