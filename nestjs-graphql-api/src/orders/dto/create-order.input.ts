import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { Role, Country, OrderStatus } from '@prisma/client';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  userId: number;

  @Field(() => Float)
  total: number;

  @Field(() => OrderStatus, { nullable: true, defaultValue: OrderStatus.PENDING })
  status?: OrderStatus;
}
