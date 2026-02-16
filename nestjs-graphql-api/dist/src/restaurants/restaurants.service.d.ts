import { PrismaService } from '../prisma/prisma.service';
import { User, Country } from '../../generated/prisma/client';
export declare class RestaurantsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllForUser(user: User): Promise<{
        menuItems: any;
        id: number;
        name: string;
        country: Country;
    }[]>;
    findOne(id: number, user: User): Promise<{
        menuItems: any;
        id: number;
        name: string;
        country: Country;
    }>;
    create(data: {
        name: string;
        country: Country;
        menuItems: string[];
    }): Promise<{
        id: number;
        name: string;
        country: Country;
        menuItems: string;
    }>;
}
