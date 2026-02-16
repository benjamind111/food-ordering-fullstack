import { ObjectType, Field, Int, Float, registerEnumType } from '@nestjs/graphql';
import { OrderStatus } from '../../generated/prisma/client';
import { UserModel } from '../users/user.model';

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
});

@ObjectType()
export class OrderModel {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => OrderStatus)
  status: OrderStatus;

  @Field(() => Float)
  total: number;

  @Field(() => Int, { nullable: true })
  paymentMethodId?: number;

  @Field(() => UserModel, { nullable: true })
  user?: UserModel;
}
