import { TestBed, inject } from '@angular/core/testing';
import { Mock } from 'ts-mocks';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ProfileService } from './profile.service';

import { FriendsService } from './friends.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('FriendsService', () => {
  let mockAngularFireDb: Mock<AngularFireDatabase>;
  let mockProfileSvc: Mock<ProfileService>;
  let results: Observable<any[]> = new BehaviorSubject([{

  }]);

  beforeEach(() => {
    mockAngularFireDb = new Mock<AngularFireDatabase>();
    mockAngularFireDb.setup(o => o.list).is((path, opts) => new FirebaseListObservable<any[]>(null, results.subscribe));
    mockProfileSvc = new Mock<ProfileService>();

    TestBed.configureTestingModule({
      providers: [
        FriendsService,
        { provide: AngularFireDatabase, useValue: mockAngularFireDb.Object },
        { provide: ProfileService, useValue: mockProfileSvc.Object },
      ]
    });
  });

  it('should be created', inject([FriendsService], (service: FriendsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a list of friends', inject([FriendsService], (service: FriendsService) => {
    let list = service.search("abc@gmail.com");
    expect(list.toArray).toBe(results.toArray);
  }));

});
