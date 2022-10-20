import { IsEmail, IsString } from "class-validator";



export class MessageDto {
    @IsString()
    @IsEmail()
    readonly email: string;
    @IsString()
    readonly msg: string;
}