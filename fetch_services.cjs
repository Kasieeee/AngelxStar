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
    console.log(data.length > 0 ? "Success! Fetched " + data.length + " bytes." : "Failed to fetch");
    const fs = require('fs');
    fs.writeFileSync('temp_services.html', data);
  });
}).on('error', (err) => {
  console.error(err);
});
