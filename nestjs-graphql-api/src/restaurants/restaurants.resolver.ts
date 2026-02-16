import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { RestaurantModel } from './restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { CurrentUser } from '../auth/current-user.decorator';
import { User } from '@prisma/client';

@Resolver(() => RestaurantModel)
export class RestaurantsResolver {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  /**
   * Re-BAC: This query only returns restaurants matching the logged-in user's country.
   * Pass header: x-user-id: <userId>
   */
  @Query(() => [RestaurantModel], { name: 'restaurants' })
  async findAll(@CurrentUser() user: User) {
    return this.restaurantsService.findAllForUser(user);
  }

  @Query(() => RestaurantModel, { name: 'restaurant', nullable: true })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.restaurantsService.findOne(id, user);
  }
}
