import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, instance, when } from 'ts-mockito';

import { AngularFireDatabase } from 'angularfire2/database';

import { ChatsComponent } from './chats.component';

describe('ChatsComponent', () => {
  const db:AngularFireDatabase = mock(AngularFireDatabase);
  
  let component: ChatsComponent;
  let fixture: ComponentFixture<ChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsComponent ],
      providers: [ { provide: AngularFireDatabase, useValue: instance(db) } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
