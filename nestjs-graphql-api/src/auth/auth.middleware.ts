import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Middleware to simulate authentication by reading the x-user-id header.
 * In a real app, this would validate a JWT token.
 */
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const userId = req.headers['x-user-id'];

    if (userId) {
      const user = await this.prisma.user.findUnique({
        where: { id: parseInt(userId as string, 10) },
      });

      if (user) {
        (req as any).user = user;
      }
    }

    next();
  }
}
