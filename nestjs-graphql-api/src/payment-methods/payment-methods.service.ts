import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentMethodsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.paymentMethod.findMany({
      where: { isActive: true },
    });
  }

  async create(name: string) {
    return this.prisma.paymentMethod.create({
      data: { name },
    });
  }

  async update(id: number, name: string) {
    return this.prisma.paymentMethod.update({
      where: { id },
      data: { name },
    });
  }

  async toggleActive(id: number) {
    const pm = await this.prisma.paymentMethod.findUnique({ where: { id } });
    if (!pm) throw new Error('Payment method not found');
    return this.prisma.paymentMethod.update({
      where: { id },
      data: { isActive: !pm.isActive },
    });
  }
}
