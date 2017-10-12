import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks';

import { AngularFireDatabase } from 'angularfire2/database';

import { CheckComponent } from './check.component';

describe('CheckComponent', () => {
  let component: CheckComponent;
  let fixture: ComponentFixture<CheckComponent>;
  let mockDb: Mock<AngularFireDatabase>;
  let db: AngularFireDatabase;
  
  beforeEach(async(() => {
    mockDb = new Mock<AngularFireDatabase>();
    mockDb.setup(o => o.list);
    db = mockDb.Object;
  
    TestBed.configureTestingModule({
      declarations: [ CheckComponent ],
      providers: [ { provide: AngularFireDatabase, useValue: db } ]
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

  it('should list results for /check', () => {
    expect(db.list).toHaveBeenCalledWith('check');
  });

});
