import { Controller, Post, Body } from '@nestjs/common';

import { SendemailService } from './sendemail.service';

@Controller('sendmail')
export class SendemailController {
    constructor(
        private readonly sendEmailService: SendemailService
    ) { }
    @Post()
    postMessage(@Body() messageDto) {
        return this.sendEmailService.sendEmail(messageDto);
    }
}