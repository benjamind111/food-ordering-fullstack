import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Country } from '@prisma/client';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Re-BAC Logic: Users can ONLY fetch restaurants that match their own country.
   * If no user is provided (unauthenticated), throw ForbiddenException.
   */
  async findAllForUser(user: User) {
    if (!user) {
      throw new ForbiddenException('You must be logged in to view restaurants');
    }

    const restaurants = await this.prisma.restaurant.findMany({
      where: { country: user.country },
    });

    // Parse menuItems JSON string back to array
    return restaurants.map((r) => ({
      ...r,
      menuItems: JSON.parse(r.menuItems),
    }));
  }

  async findOne(id: number, user: User) {
    if (!user) {
      throw new ForbiddenException('You must be logged in to view restaurants');
    }

    const restaurant = await this.prisma.restaurant.findFirst({
      where: { id, country: user.country },
    });

    if (!restaurant) {
      return null;
    }

    return {
      ...restaurant,
      menuItems: JSON.parse(restaurant.menuItems),
    };
  }

  async create(data: { name: string; country: Country; menuItems: string[] }) {
    return this.prisma.restaurant.create({
      data: {
        name: data.name,
        country: data.country,
        menuItems: JSON.stringify(data.menuItems),
      },
    });
  }
}
