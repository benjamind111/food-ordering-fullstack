import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderModel } from './order.model';
import { OrdersService } from './orders.service';
import { CreateOrderInput } from './dto/create-order.input';
import { CurrentUser } from '../auth/current-user.decorator';
import { User } from '@prisma/client';

import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@Resolver(() => OrderModel)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [OrderModel], { name: 'orders' })
  async findAll() {
    return this.ordersService.findAll();
  }

  @Query(() => [OrderModel], { name: 'myOrders' })
  async findMyOrders(@CurrentUser() user: User) {
    return this.ordersService.findByUser(user.id);
  }

  @Query(() => OrderModel, { name: 'order', nullable: true })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => OrderModel)
  async createOrder(@Args('input') input: CreateOrderInput) {
    return this.ordersService.create(input);
  }

  @Mutation(() => OrderModel)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  async cancelOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.cancel(id);
  }

  @Mutation(() => OrderModel)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  async payOrder(
    @Args('id', { type: () => Int }) id: number,
    @Args('paymentMethodId', { type: () => Int }) paymentMethodId: number,
  ) {
    return this.ordersService.pay(id, paymentMethodId);
  }
}
