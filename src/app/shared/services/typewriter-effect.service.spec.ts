import { TestBed } from '@angular/core/testing';

import { TypewriterEffectService } from './typewriter-effect.service';

describe('TypewriterEffectService', () => {
  let service: TypewriterEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypewriterEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
