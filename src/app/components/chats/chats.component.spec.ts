import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks';

import { AngularFireDatabase } from 'angularfire2/database';
import { AuthenticationService } from '../../services/authentication.service';

import { ChatsComponent } from './chats.component';

describe('ChatsComponent', () => {
  // const db:AngularFireDatabase = mock(AngularFireDatabase);
  let mockAuthService: Mock<AuthenticationService>;

  let component: ChatsComponent;
  let fixture: ComponentFixture<ChatsComponent>;
  let mockDb: Mock<AngularFireDatabase>;
  let db: AngularFireDatabase;

  beforeEach(async(() => {
    mockAuthService = new Mock<AuthenticationService>();
    mockDb = new Mock<AngularFireDatabase>();
    mockDb.setup(ls => ls.list);
    db = mockDb.Object;

    TestBed.configureTestingModule({
      declarations: [ChatsComponent],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService.Object },
        { provide: AngularFireDatabase, useValue: db },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list results for /chats', () => {
    expect(db.list).toHaveBeenCalledWith('chats');
  });

});
