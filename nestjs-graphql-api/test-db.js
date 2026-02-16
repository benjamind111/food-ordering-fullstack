// Test that the paymentMethodId column works
async function test() {
  try {
    // Test 1: Create order (uses paymentMethodId column)
    const r1 = await fetch('http://127.0.0.1:3000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-user-id': '4' },
      body: JSON.stringify({
        query: `mutation { createOrder(input: { userId: 4, total: 99.0 }) { id status total paymentMethodId } }`
      })
    });
    const j1 = await r1.json();
    console.log('CREATE ORDER:', JSON.stringify(j1, null, 2));

    // Test 2: Query orders (the failing query)
    const r2 = await fetch('http://127.0.0.1:3000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-user-id': '4' },
      body: JSON.stringify({
        query: `{ orders { id status total paymentMethodId } }`
      })
    });
    const j2 = await r2.json();
    console.log('QUERY ORDERS:', JSON.stringify(j2, null, 2));
  } catch (e) {
    console.error('FAILED:', e.message);
  }
}
test();
