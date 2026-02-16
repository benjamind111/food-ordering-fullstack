import { OrderStatus } from '../../../generated/prisma/client';
export declare class CreateOrderInput {
    userId: number;
    total: number;
    status?: OrderStatus;
}
