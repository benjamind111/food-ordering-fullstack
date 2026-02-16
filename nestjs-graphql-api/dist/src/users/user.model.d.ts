import { Role, Country } from '../../generated/prisma/client';
export declare class UserModel {
    id: number;
    email: string;
    role: Role;
    country: Country;
}
