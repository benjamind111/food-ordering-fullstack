import { OrderStatus } from '@prisma/client';
export declare class CreateOrderInput {
    userId: number;
    total: number;
    status?: OrderStatus;
}
