/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  fname: string;

  @IsString()
  lname: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  enrolledCourses?: string[];

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
