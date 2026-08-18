/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  fname: string;

  @IsString()
  lname: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
