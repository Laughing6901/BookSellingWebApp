import { Test, TestingModule } from '@nestjs/testing';
import { ForgotpassService } from './forgotpass.service';

describe('ForgotpassService', () => {
  let service: ForgotpassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForgotpassService],
    }).compile();

    service = module.get<ForgotpassService>(ForgotpassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
