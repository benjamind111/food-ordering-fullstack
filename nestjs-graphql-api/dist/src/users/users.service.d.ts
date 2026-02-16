import { PrismaService } from '../prisma/prisma.service';
import { User, Role, Country } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    create(data: {
        email: string;
        password: string;
        role?: Role;
        country: Country;
    }): Promise<User>;
}
