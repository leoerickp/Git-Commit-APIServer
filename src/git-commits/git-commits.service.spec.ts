import { Test, TestingModule } from '@nestjs/testing';
import { GitCommitsService } from './git-commits.service';

describe('GitCommitsService', () => {
  let service: GitCommitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GitCommitsService],
    }).compile();

    service = module.get<GitCommitsService>(GitCommitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
