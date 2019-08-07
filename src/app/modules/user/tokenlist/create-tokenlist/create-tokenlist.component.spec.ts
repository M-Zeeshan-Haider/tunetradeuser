import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTokenlistComponent } from './create-tokenlist.component';

describe('CreateTokenlistComponent', () => {
  let component: CreateTokenlistComponent;
  let fixture: ComponentFixture<CreateTokenlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTokenlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTokenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
