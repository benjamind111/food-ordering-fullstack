import { RestaurantsService } from './restaurants.service';
import { User } from '@prisma/client';
export declare class RestaurantsResolver {
    private readonly restaurantsService;
    constructor(restaurantsService: RestaurantsService);
    findAll(user: User): Promise<{
        menuItems: any;
        id: number;
        name: string;
        country: import("../../generated/prisma/enums").Country;
    }[]>;
    findOne(id: number, user: User): Promise<{
        menuItems: any;
        id: number;
        name: string;
        country: import("../../generated/prisma/enums").Country;
    }>;
}
