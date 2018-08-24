import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgExampleLibraryComponent } from './ng-example-library.component';

describe('NgExampleLibraryComponent', () => {
  let component: NgExampleLibraryComponent;
  let fixture: ComponentFixture<NgExampleLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgExampleLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgExampleLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
