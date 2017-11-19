import { TestBed, inject } from '@angular/core/testing';
import { Mock } from 'ts-mocks';

import { AngularFireDatabase } from 'angularfire2/database';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let mockAngularFireDb: Mock<AngularFireDatabase>;

  beforeEach(() => {
    mockAngularFireDb = new Mock<AngularFireDatabase>();

    TestBed.configureTestingModule({
      providers: [
        ProfileService,
        { provide: AngularFireDatabase, useValue: mockAngularFireDb.Object },
      ]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
