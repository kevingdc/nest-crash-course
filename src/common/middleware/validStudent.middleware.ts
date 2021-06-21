import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { students } from '../../db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { studentId } = req.params;
    const studentExists = students.some((student) => student.id === studentId);

    if (!studentExists) {
      throw new NotFoundException();
    }
  }
}
