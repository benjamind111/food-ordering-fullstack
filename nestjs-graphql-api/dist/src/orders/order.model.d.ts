import { OrderStatus } from '@prisma/client';
import { UserModel } from '../users/user.model';
export declare class OrderModel {
    id: number;
    userId: number;
    status: OrderStatus;
    total: number;
    paymentMethodId?: number;
    user?: UserModel;
}
