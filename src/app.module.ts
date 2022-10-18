import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitCommitsModule } from './git-commits/git-commits.module';
import { SendemailModule } from './sendemail/sendemail.module';

@Module({
  imports: [GitCommitsModule, SendemailModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule { }
