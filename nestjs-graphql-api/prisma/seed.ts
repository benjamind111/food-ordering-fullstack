import 'dotenv/config';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient, Role, Country } from '../generated/prisma/client';

// Use the same database at project root
const adapter = new PrismaBetterSqlite3({ url: 'file:./dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data (order matters for FK constraints)
  await prisma.order.deleteMany();
  await prisma.paymentMethod.deleteMany();
  await prisma.restaurant.deleteMany();
  await prisma.user.deleteMany();

  // Reset SQLite autoincrement
  await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence`);

  // Create all 6 users (Role x Country combinations)
  // IDs will be 1-6 in this order
  const memberIndia = await prisma.user.create({
    data: { email: 'member.india@example.com', password: 'password123', role: Role.MEMBER, country: Country.INDIA },
  });
  const memberUsa = await prisma.user.create({
    data: { email: 'member.usa@example.com', password: 'password123', role: Role.MEMBER, country: Country.USA },
  });
  const managerIndia = await prisma.user.create({
    data: { email: 'manager.india@example.com', password: 'password123', role: Role.MANAGER, country: Country.INDIA },
  });
  const managerUsa = await prisma.user.create({
    data: { email: 'manager.usa@example.com', password: 'password123', role: Role.MANAGER, country: Country.USA },
  });
  const adminIndia = await prisma.user.create({
    data: { email: 'admin.india@example.com', password: 'admin123', role: Role.ADMIN, country: Country.INDIA },
  });
  const adminUsa = await prisma.user.create({
    data: { email: 'admin.usa@example.com', password: 'admin123', role: Role.ADMIN, country: Country.USA },
  });

  console.log('✅ Created 6 users (all Role × Country combos)');

  // Create payment methods (globally available)
  const creditCard = await prisma.paymentMethod.create({ data: { name: 'Credit Card' } });
  const debitCard = await prisma.paymentMethod.create({ data: { name: 'Debit Card' } });
  const paypal = await prisma.paymentMethod.create({ data: { name: 'PayPal' } });
  const upi = await prisma.paymentMethod.create({ data: { name: 'UPI' } });

  console.log('✅ Created 4 payment methods');

  // 5 Restaurants in INDIA
  const indiaRestaurants = [
    { name: 'Spice Garden', country: Country.INDIA, menuItems: JSON.stringify(['Butter Chicken', 'Naan', 'Biryani', 'Paneer Tikka']) },
    { name: 'Tandoori Nights', country: Country.INDIA, menuItems: JSON.stringify(['Tandoori Chicken', 'Dal Makhani', 'Roti', 'Raita']) },
    { name: 'Curry House', country: Country.INDIA, menuItems: JSON.stringify(['Chicken Curry', 'Rice', 'Samosa', 'Chutney']) },
    { name: 'Mumbai Street Food', country: Country.INDIA, menuItems: JSON.stringify(['Vada Pav', 'Pav Bhaji', 'Bhel Puri', 'Pani Puri']) },
    { name: 'Royal Indian Kitchen', country: Country.INDIA, menuItems: JSON.stringify(['Rogan Josh', 'Dum Aloo', 'Kulfi', 'Lassi']) },
  ];

  // 5 Restaurants in USA
  const usaRestaurants = [
    { name: 'Burger Barn', country: Country.USA, menuItems: JSON.stringify(['Classic Burger', 'Fries', 'Milkshake', 'Onion Rings']) },
    { name: 'Pizza Palace', country: Country.USA, menuItems: JSON.stringify(['Pepperoni Pizza', 'Margherita', 'Garlic Bread', 'Wings']) },
    { name: 'Grill Masters', country: Country.USA, menuItems: JSON.stringify(['BBQ Ribs', 'Coleslaw', 'Cornbread', 'Mac & Cheese']) },
    { name: 'East Coast Diner', country: Country.USA, menuItems: JSON.stringify(['Pancakes', 'Bacon & Eggs', 'Waffles', 'Hash Browns']) },
    { name: 'Taco Town', country: Country.USA, menuItems: JSON.stringify(['Beef Tacos', 'Burritos', 'Nachos', 'Guacamole']) },
  ];

  for (const restaurant of [...indiaRestaurants, ...usaRestaurants]) {
    await prisma.restaurant.create({ data: restaurant });
  }

  console.log('✅ Created 5 INDIA restaurants and 5 USA restaurants');

  // Create sample orders
  await prisma.order.createMany({
    data: [
      { userId: memberIndia.id, status: 'PENDING', total: 450.0 },
      { userId: memberIndia.id, status: 'PENDING', total: 299.0 },
      { userId: memberUsa.id, status: 'PENDING', total: 25.99 },
      { userId: memberUsa.id, status: 'PENDING', total: 42.50 },
    ],
  });

  console.log('✅ Created sample orders');
  console.log('🎉 Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
