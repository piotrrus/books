import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersPageComponent } from './publishers-page.component';

describe('PublishersPageComponent', () => {
  let component: PublishersPageComponent;
  let fixture: ComponentFixture<PublishersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
