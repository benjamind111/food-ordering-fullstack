import { Role, Country } from '../../../generated/prisma/client';
export declare class CreateUserInput {
    email: string;
    password: string;
    role?: Role;
    country: Country;
}
