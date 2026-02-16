import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Country } from '@prisma/client';

@ObjectType()
export class RestaurantModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Country)
  country: Country;

  @Field(() => [String])
  menuItems: string[];
}
