import { TestBed, inject } from '@angular/core/testing';
import { Mock } from 'ts-mocks';

import { AngularFireDatabase } from 'angularfire2/database';
import { ProfileService } from './profile.service';

import { FriendsService } from './friends.service';

describe('FriendsService', () => {
  let mockAngularFireDb: Mock<AngularFireDatabase>;
  let mockProfileSvc: Mock<ProfileService>;
  
    beforeEach(() => {
      mockAngularFireDb = new Mock<AngularFireDatabase>();
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
});
