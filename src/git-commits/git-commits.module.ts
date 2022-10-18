import { Module } from '@nestjs/common';
import { GitCommitsController } from './git-commits.controller';
import { GitCommitsService } from './git-commits.service';

@Module({
  controllers: [GitCommitsController],
  providers: [GitCommitsService]
})
export class GitCommitsModule { }
