import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../../generated/prisma/client';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserModel], { name: 'users' })
  @Roles(Role.ADMIN)
  async findAll() {
    return this.usersService.findAll();
  }

  @Query(() => UserModel, { name: 'user', nullable: true })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => UserModel)
  @Roles(Role.ADMIN)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.usersService.create(input);
  }
}
