const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false
});

https.get('https://angelandstarcareservices.com/care-services/', { agent }, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const text = data.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                     .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ')
                     .trim();
    console.log(text.substring(0, 5000));
  });
}).on('error', (err) => {
  console.error(err);
});
