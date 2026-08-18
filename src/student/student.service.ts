import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const existing = await this.studentModel.findOne({
      email: createStudentDto.email,
    });
    if (existing) {
      throw new ConflictException('A student with this email already exists');
    }
    const student = new this.studentModel(createStudentDto);
    return student.save();
  }

  async findAll() {
    return this.studentModel.find().populate('enrolledCourses').exec();
  }

  async findOne(id: string) {
    const student = await this.studentModel
      .findById(id)
      .populate('enrolledCourses')
      .exec();
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentModel
      .findByIdAndUpdate(id, updateStudentDto, { new: true })
      .exec();
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }

  async remove(id: string) {
    const student = await this.studentModel.findByIdAndDelete(id).exec();
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return { message: 'Student deleted successfully' };
  }
}
