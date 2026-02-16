import { Country } from '@prisma/client';
export declare class RestaurantModel {
    id: number;
    name: string;
    country: Country;
    menuItems: string[];
}
