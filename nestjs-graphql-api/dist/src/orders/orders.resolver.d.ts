import { OrdersService } from './orders.service';
import { CreateOrderInput } from './dto/create-order.input';
import { User } from '../../generated/prisma/client';
import { Role } from '../../generated/prisma/client';
export declare class OrdersResolver {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<({
        user: {
            id: number;
            email: string;
            password: string;
            role: Role;
            country: import("../../generated/prisma/enums").Country;
        };
    } & {
        id: number;
        userId: number;
        status: import("../../generated/prisma/enums").OrderStatus;
        total: number;
        paymentMethodId: number | null;
    })[]>;
    findMyOrders(user: User): Promise<{
        id: number;
        userId: number;
        status: import("../../generated/prisma/enums").OrderStatus;
        total: number;
        paymentMethodId: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        status: import("../../generated/prisma/enums").OrderStatus;
        total: number;
        paymentMethodId: number | null;
    }>;
    createOrder(input: CreateOrderInput): Promise<{
        id: number;
        userId: number;
        status: import("../../generated/prisma/enums").OrderStatus;
        total: number;
        paymentMethodId: number | null;
    }>;
    cancelOrder(id: number): Promise<{
        id: number;
        userId: number;
        status: import("../../generated/prisma/enums").OrderStatus;
        total: number;
        paymentMethodId: number | null;
    }>;
    payOrder(id: number, paymentMethodId: number): Promise<{
        id: number;
        userId: number;
        status: import("../../generated/prisma/enums").OrderStatus;
        total: number;
        paymentMethodId: number | null;
    }>;
}
