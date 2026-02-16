import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { Role } from '../../generated/prisma/client';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        id: number;
        email: string;
        password: string;
        role: Role;
        country: import("../../generated/prisma/enums").Country;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        email: string;
        password: string;
        role: Role;
        country: import("../../generated/prisma/enums").Country;
    }>;
    createUser(input: CreateUserInput): Promise<{
        id: number;
        email: string;
        password: string;
        role: Role;
        country: import("../../generated/prisma/enums").Country;
    }>;
}
