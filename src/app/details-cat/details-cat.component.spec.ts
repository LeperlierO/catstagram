import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCatComponent } from './details-cat.component';

describe('DetailsCatComponent', () => {
  let component: DetailsCatComponent;
  let fixture: ComponentFixture<DetailsCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCatComponent]
    });
    fixture = TestBed.createComponent(DetailsCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
