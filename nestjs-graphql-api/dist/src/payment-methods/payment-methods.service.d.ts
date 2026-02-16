import { PrismaService } from '../prisma/prisma.service';
export declare class PaymentMethodsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
        isActive: boolean;
    }[]>;
    create(name: string): Promise<{
        id: number;
        name: string;
        isActive: boolean;
    }>;
    update(id: number, name: string): Promise<{
        id: number;
        name: string;
        isActive: boolean;
    }>;
    toggleActive(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
    }>;
}
