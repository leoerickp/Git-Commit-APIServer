import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { AuthorDto } from './dto/author.dto';
import * as request from 'supertest';

@Injectable()
export class GitCommitsService {
    assignData(data: any): any {
        const author = new AuthorDto(data.commit.author.name, data.commit.author.email, data.commit.author.date);
        const committer = new AuthorDto(data.commit.committer.name, data.commit.committer.email, data.commit.committer.date);
        const message = data.commit.message;
        const author_avatar_url = data.author.avatar_url;
        const author_html_url = data.author.html_url;
        const commiter_avatar_url = data.committer.avatar_url;
        const commiter_html_url = data.committer.html_url;
        return {
            author,
            committer,
            message,
            author_avatar_url,
            author_html_url,
            commiter_avatar_url,
            commiter_html_url
        };
    }
    async getDataFromGitHub(owner: string, repo: string) {
        const octokit = new Octokit({
            auth: process.env.TOKEN
        });
        const gitApiResult = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner,
            repo
        });
        return gitApiResult;
    }
    async getGitCommitsFromGitHub3last(owner: string, repo: string) {
        const gitApiResult: any = await this.getDataFromGitHub(owner, repo);
        let result = [];

        let n = 3;
        if (gitApiResult.data.length < n) {
            n = gitApiResult.data.length;
        }
        for (let i = 0; i < n; i++) {
            result.push(this.assignData(gitApiResult.data[i]));
        }
        return result;
    }
    async getGitCommitsFromGitHub(owner: string, repo: string) {
        const gitApiResult: any = await this.getDataFromGitHub(owner, repo);
        let result = [];
        gitApiResult.data.map((data) => {
            result.push(this.assignData(data));
        });
        return result;
    }
}
