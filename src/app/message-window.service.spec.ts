import { TestBed } from '@angular/core/testing';

import { MessageWindowService } from './message-window.service';

describe('MessageWindowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageWindowService = TestBed.get(MessageWindowService);
    expect(service).toBeTruthy();
  });
});
