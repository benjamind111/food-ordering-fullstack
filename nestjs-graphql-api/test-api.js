const http = require('http');

function gql(userId, query, label) {
  return new Promise((resolve) => {
    const data = JSON.stringify({ query });
    const opts = {
      hostname: '127.0.0.1',
      port: 3000,
      path: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-user-id': String(userId),
        'Content-Length': Buffer.byteLength(data),
      },
      timeout: 5000,
    };
    const req = http.request(opts, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        console.log(`\n--- ${label} (user=${userId}) => HTTP ${res.statusCode} ---`);
        try {
          const j = JSON.parse(body);
          if (j.errors) console.log('ERRORS:', JSON.stringify(j.errors, null, 2));
          else if (j.data) console.log('OK, data keys:', Object.keys(j.data), ', count:', JSON.stringify(j.data[Object.keys(j.data)[0]]?.length || 'N/A'));
        } catch { console.log('RAW:', body.substring(0, 500)); }
        resolve();
      });
    });
    req.on('timeout', () => { console.log(`${label}: TIMEOUT`); req.destroy(); resolve(); });
    req.on('error', (e) => { console.log(`${label}: ERROR - ${e.message}`); resolve(); });
    req.write(data);
    req.end();
  });
}

(async () => {
  await gql(1, '{ restaurants { id name country } }', 'Member INDIA restaurants');
  await gql(1, '{ myOrders { id status total } }', 'Member INDIA myOrders');
  await gql(5, '{ orders { id status total user { email } } }', 'Admin INDIA orders');
  await gql(3, '{ orders { id status total user { email } } }', 'Manager INDIA orders');
  await gql(5, '{ restaurants { id name country } }', 'Admin INDIA restaurants');
  console.log('\nDone.');
  process.exit(0);
})();
