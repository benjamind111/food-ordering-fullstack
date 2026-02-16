const ENDPOINT = 'http://127.0.0.1:3000/graphql';

const GET_RESTAURANTS_QUERY = `
  query {
    restaurants {
      id
      name
      country
    }
  }
`;

const GET_USERS_QUERY = `
  query {
    users {
      id
      email
      role
      country
    }
  }
`;

const CREATE_ORDER_MUTATION = `
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
      status
      total
    }
  }
`;

const PAY_ORDER_MUTATION = `
  mutation PayOrder($id: Int!, $paymentMethodId: Int!) {
    payOrder(id: $id, paymentMethodId: $paymentMethodId) {
      id
      status
    }
  }
`;

async function graphqlRequest(query: string, headers: Record<string, string> = {}, variables: Record<string, any> = {}) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({ query, variables }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }
  return result.data;
}

async function testIndiaUser() {
  console.log('Testing as INDIA User (ID: 1)...');
  try {
    const data = await graphqlRequest(GET_RESTAURANTS_QUERY, { 'x-user-id': '1' });
    console.log('✅ INDIA User received:', data.restaurants.length, 'restaurants');
    if (data.restaurants.every((r: any) => r.country === 'INDIA')) {
        console.log('✅ All restaurants are in INDIA');
    } else {
        console.error('❌ Error: User received non-INDIA restaurants');
    }
  } catch (error) {
    console.error('❌ INDIA User request failed:', error.message);
  }
}

async function testUSAUser() {
    console.log('\nTesting as USA User (ID: 2)...');
    try {
      const data = await graphqlRequest(GET_RESTAURANTS_QUERY, { 'x-user-id': '2' });
      console.log('✅ USA User received:', data.restaurants.length, 'restaurants');
      if (data.restaurants.every((r: any) => r.country === 'USA')) {
          console.log('✅ All restaurants are in USA');
      } else {
          console.error('❌ Error: User received non-USA restaurants');
      }
    } catch (error) {
      console.error('❌ USA User request failed:', error.message);
    }
  }

async function testAdminUser() {
  console.log('\nTesting as ADMIN User (ID: 3)...');
  try {
    const data = await graphqlRequest(GET_USERS_QUERY, { 'x-user-id': '3' });
    console.log('✅ Admin received:', data.users.length, 'users');
  } catch (error) {
    console.error('❌ Admin request failed:', error.message);
  }
}

async function testUnauthorizedAccess() {
    console.log('\nTesting Unauthorized Access to Users (Member trying to access Users)...');
    try {
      await graphqlRequest(GET_USERS_QUERY, { 'x-user-id': '1' }); // Member
      console.error('❌ Error: Member was able to access Users query (should be forbidden)');
    } catch (error) {
      console.log('✅ Access correctly denied:', error.message.split(':')[0]);
    }
  }

async function testOrderFlow() {
    console.log('\nTesting Order Flow...');
    let orderId: number;
    
    // 1. Create Order as User 1
    console.log('1. Creating Order as User 1...');
    try {
        const data = await graphqlRequest(CREATE_ORDER_MUTATION, { 'x-user-id': '1' }, { input: { userId: 1, total: 25.0 } });
        orderId = data.createOrder.id;
        console.log('✅ Order created! ID:', orderId, 'Status:', data.createOrder.status);
    } catch (e: any) {
        console.error('❌ Failed to create order:', e.message);
        return;
    }

    // 2. Pay Order as Admin (User 3)
    console.log('2. Paying Order as Admin...');
    try {
        // Try with Payment Method ID 1 (Assuming it exists from seed or previous steps)
        const data = await graphqlRequest(PAY_ORDER_MUTATION, { 'x-user-id': '3' }, { id: orderId, paymentMethodId: 1 });
        console.log('✅ Order Paid! Status:', data.payOrder.status);
    } catch (e: any) {
        console.log('⚠️ Payment failed (expected if PM ID 1 missing):', e.message);
    }
}

async function main() {
  await testIndiaUser();
  await testUSAUser();
  await testAdminUser();
  await testUnauthorizedAccess();
  await testOrderFlow();
}

main();
