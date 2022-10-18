import { Controller, Get } from '@nestjs/common';
import { GitCommitsService } from './git-commits.service';

@Controller('git-commits')
export class GitCommitsController {
    constructor(
        private readonly gitCommitsService: GitCommitsService
    ) { }
    @Get('/last')
    getGit3LastCommits() {

        return this.gitCommitsService.getGitCommitsFromGitHub3last(process.env.GIT_OWNER, process.env.REPO);
    }
    @Get('/all')
    getGitAllCommits() {
        return this.gitCommitsService.getGitCommitsFromGitHub(process.env.GIT_OWNER, process.env.REPO);
    }
}
