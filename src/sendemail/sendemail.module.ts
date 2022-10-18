import { Module } from '@nestjs/common';
import { SendemailController } from './sendemail.controller';
import { SendemailService } from './sendemail.service';

@Module({
  controllers: [SendemailController],
  providers: [SendemailService]
})
export class SendemailModule {}
