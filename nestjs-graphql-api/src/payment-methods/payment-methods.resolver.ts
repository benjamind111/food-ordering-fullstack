import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaymentMethodsService } from './payment-methods.service';
import { PaymentMethod } from './payment-method.model';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@Resolver(() => PaymentMethod)
export class PaymentMethodsResolver {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  @Query(() => [PaymentMethod])
  async paymentMethods() {
    return this.paymentMethodsService.findAll();
  }

  @Mutation(() => PaymentMethod)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  async addPaymentMethod(@Args('name') name: string) {
    return this.paymentMethodsService.create(name);
  }

  @Mutation(() => PaymentMethod)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  async updatePaymentMethod(
    @Args('id', { type: () => Int }) id: number,
    @Args('name') name: string,
  ) {
    return this.paymentMethodsService.update(id, name);
  }

  @Mutation(() => PaymentMethod)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  async togglePaymentMethod(@Args('id', { type: () => Int }) id: number) {
    return this.paymentMethodsService.toggleActive(id);
  }
}
