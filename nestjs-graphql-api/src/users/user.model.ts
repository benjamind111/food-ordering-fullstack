import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Role, Country } from '../../generated/prisma/client';

// Register enums with GraphQL
registerEnumType(Role, { name: 'Role', description: 'User roles' });
registerEnumType(Country, { name: 'Country', description: 'Available countries' });

@ObjectType()
export class UserModel {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field(() => Role)
  role: Role;

  @Field(() => Country)
  country: Country;

  // password intentionally excluded from GraphQL schema
}
