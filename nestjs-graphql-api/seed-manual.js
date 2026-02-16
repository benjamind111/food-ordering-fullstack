const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting manual seed...');

  // 1. Create Payment Methods
  const paymentMethods = ['Credit Card', 'PayPal', 'UPI', 'Debit Card'];
  for (const method of paymentMethods) {
    await prisma.paymentMethod.upsert({
      where: { name: method },
      update: {},
      create: { name: method, isActive: true },
    });
  }
  console.log('✅ Payment Methods added');

  // 2. Create Users (Admin, Manager, Member)
  const users = [
    { email: 'admin@india.com', role: 'ADMIN', country: 'INDIA' },
    { email: 'manager@usa.com', role: 'MANAGER', country: 'USA' },
    { email: 'user@india.com', role: 'MEMBER', country: 'INDIA' },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: {
        email: u.email,
        password: 'password123', // Simple password for testing
        role: u.role,
        country: u.country,
      },
    });
  }
  console.log('✅ Users added');

  // 3. Create Restaurants
  const restaurants = [
    { name: 'Spicy Curry House', country: 'INDIA', menu: 'Butter Chicken, Naan' },
    { name: 'Burger King USA', country: 'USA', menu: 'Whopper, Fries, Coke' },
    { name: 'Dosa Plaza', country: 'INDIA', menu: 'Masala Dosa, Idli' },
  ];

  for (const r of restaurants) {
    await prisma.restaurant.create({
      data: {
        name: r.name,
        country: r.country,
        menuItems: r.menu,
      },
    });
  }
  console.log('✅ Restaurants added');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });