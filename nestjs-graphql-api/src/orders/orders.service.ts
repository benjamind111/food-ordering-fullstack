import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderStatus } from '../../generated/prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.order.findMany({ include: { user: true } });
  }

  async findByUser(userId: number) {
    return this.prisma.order.findMany({ where: { userId } });
  }

  async findOne(id: number) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  async create(data: { userId: number; total: number; status?: OrderStatus }) {
    return this.prisma.order.create({
      data: {
        userId: data.userId,
        total: data.total,
        status: data.status || OrderStatus.PENDING,
      },
    });
  }

  async cancel(id: number) {
    return this.prisma.order.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }

  async pay(id: number, paymentMethodId: number) {
    return this.prisma.order.update({
      where: { id },
      data: {
        status: 'PAID',
        paymentMethodId,
      },
    });
  }
}
