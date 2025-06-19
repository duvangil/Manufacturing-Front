import { TestBed } from '@angular/core/testing';

import { ElaborationTypeService } from './elaboration-type.service';

describe('ElaborationTypeService', () => {
  let service: ElaborationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElaborationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
