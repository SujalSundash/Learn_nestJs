/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsBoolean, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  instructor: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  durationInWeeks?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
