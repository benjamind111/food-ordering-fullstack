const http = require('http');

function gql(userId, query) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query });
    const req = http.request({
      hostname: '127.0.0.1',
      port: 3000,
      path: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-user-id': String(userId),
        'Content-Length': Buffer.byteLength(data),
      },
    }, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        console.log(`[User ${userId}] Status: ${res.statusCode}`);
        try { console.log(JSON.stringify(JSON.parse(body), null, 2)); } catch { console.log(body); }
        resolve();
      });
    });
    req.on('error', (e) => { console.error(`[User ${userId}] Error:`, e.message); reject(e); });
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log('=== Test 1: Member (ID=1) - restaurants ===');
  await gql(1, '{ restaurants { id name country } }');

  console.log('\n=== Test 2: Member (ID=1) - myOrders ===');
  await gql(1, '{ myOrders { id status total } }');

  console.log('\n=== Test 3: Admin (ID=5) - orders with user ===');
  await gql(5, '{ orders { id status total user { email } } }');

  console.log('\n=== Test 4: Manager (ID=3) - orders with user ===');
  await gql(3, '{ orders { id status total user { email } } }');

  console.log('\n=== Test 5: Admin (ID=5) - restaurants ===');
  await gql(5, '{ restaurants { id name country } }');
}

main().catch(console.error);
