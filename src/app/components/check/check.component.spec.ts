import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, instance, when } from 'ts-mockito';

import { AngularFireDatabase } from 'angularfire2/database';

import { CheckComponent } from './check.component';

describe('CheckComponent', () => {
  const db:AngularFireDatabase = mock(AngularFireDatabase);

  let component: CheckComponent;
  let fixture: ComponentFixture<CheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckComponent ],
      providers: [ { provide: AngularFireDatabase, useValue: instance(db) } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
