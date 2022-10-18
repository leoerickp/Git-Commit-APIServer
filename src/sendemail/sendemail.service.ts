import { Injectable, NotFoundException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class SendemailService {
    sendEmail(messageDto) {
        let req;
        const { email, msg } = messageDto;
        const user = process.env.EMAIL;
        const pass = process.env.EPASSWORD;
        const to = process.env.EMAILTO;
        const text = msg + ' ' + email;
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass
            }
        });
        let mailOptions = {
            from: user,
            to,
            subject: 'Contact from the Website [No-reply]',
            text
        };

        try {
            req = transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    throw new NotFoundException(error);
                } else {
                    req = info;
                }
            });
            return { msg: 'success' }
        } catch (error) {
            throw new NotFoundException(error);
        }
    }
}
