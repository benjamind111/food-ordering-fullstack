import { InputType, Field } from '@nestjs/graphql';
import { Role, Country } from '../../../generated/prisma/client';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => Role, { nullable: true, defaultValue: Role.MEMBER })
  role?: Role;

  @Field(() => Country)
  country: Country;
}
