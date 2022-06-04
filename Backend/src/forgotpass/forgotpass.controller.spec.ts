import { Test, TestingModule } from '@nestjs/testing';
import { ForgotpassController } from './forgotpass.controller';
import { ForgotpassService } from './forgotpass.service';

describe('ForgotpassController', () => {
  let controller: ForgotpassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForgotpassController],
      providers: [ForgotpassService],
    }).compile();

    controller = module.get<ForgotpassController>(ForgotpassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
