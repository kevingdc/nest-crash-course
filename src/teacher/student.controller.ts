import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from 'src/student/dto/student.dto';
import { StudentService } from '../student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId,
    @Param('studentId', new ParseUUIDPipe()) studentId,
  ): StudentResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
