import { Controller, Get } from '@nestjs/common';
import { GitCommitsService } from './git-commits.service';

@Controller('git-commits')
export class GitCommitsController {
    constructor(
        private readonly gitCommitsService: GitCommitsService
    ) { }
    @Get('/last')
    getGit3LastCommits() {
        return this.gitCommitsService.getGitCommitsFromGitHub3last("leoerickp", "liga-justicia");
    }
    @Get('/all')
    getGitAllCommits() {
        return this.gitCommitsService.getGitCommitsFromGitHub("leoerickp", "liga-justicia");
    }
}
