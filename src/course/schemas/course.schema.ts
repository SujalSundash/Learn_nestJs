import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema({ timestamps: true })
export class Course {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  instructor: string;

  @Prop({ default: 0 })
  durationInWeeks: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
