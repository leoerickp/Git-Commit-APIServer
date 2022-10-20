import { Controller, Post, Body } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';

import { SendemailService } from './sendemail.service';

@Controller('sendmail')
export class SendemailController {
    constructor(
        private readonly sendEmailService: SendemailService
    ) { }
    @Post()
    postMessage(@Body() messageDto: MessageDto) {
        return messageDto;
        //return this.sendEmailService.sendEmail(messageDto);
    }
}