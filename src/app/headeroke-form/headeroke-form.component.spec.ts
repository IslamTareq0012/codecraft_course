import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderokeFormComponent } from './headeroke-form.component';

describe('HeaderokeFormComponent', () => {
  let component: HeaderokeFormComponent;
  let fixture: ComponentFixture<HeaderokeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderokeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
