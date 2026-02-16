import { PrismaService } from '../prisma/prisma.service';
import { OrderStatus } from '../../generated/prisma/client';
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        user: {
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums").Role;
            country: import("../../generated/prisma/enums").Country;
        };
    } & {
        id: number;
        paymentMethodId: number | null;
        userId: number;
        status: OrderStatus;
        total: number;
    })[]>;
    findByUser(userId: number): Promise<{
        id: number;
        paymentMethodId: number | null;
        userId: number;
        status: OrderStatus;
        total: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        paymentMethodId: number | null;
        userId: number;
        status: OrderStatus;
        total: number;
    }>;
    create(data: {
        userId: number;
        total: number;
        status?: OrderStatus;
    }): Promise<{
        id: number;
        paymentMethodId: number | null;
        userId: number;
        status: OrderStatus;
        total: number;
    }>;
    cancel(id: number): Promise<{
        id: number;
        paymentMethodId: number | null;
        userId: number;
        status: OrderStatus;
        total: number;
    }>;
    pay(id: number, paymentMethodId: number): Promise<{
        id: number;
        paymentMethodId: number | null;
        userId: number;
        status: OrderStatus;
        total: number;
    }>;
}
