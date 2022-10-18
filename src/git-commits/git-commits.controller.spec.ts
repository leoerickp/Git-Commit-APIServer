import { Test, TestingModule } from '@nestjs/testing';
import { GitCommitsController } from './git-commits.controller';

describe('GitCommitsController', () => {
  let controller: GitCommitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GitCommitsController],
    }).compile();

    controller = module.get<GitCommitsController>(GitCommitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
