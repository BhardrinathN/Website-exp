const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = [
  { name: 'antolin.png', url: 'https://logo.clearbit.com/antolin.com' },
  { name: 'nissan.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png' },
  { name: 'daimler.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Daimler_Logo.svg' },
  { name: 'cavinkare.png', url: 'https://logo.clearbit.com/cavinkare.com' },
  { name: 'suzuki.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Suzuki_logo_2.svg' }
];

const dir = path.join(__dirname, 'public', 'images', 'clients');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status: ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
};

async function run() {
  for (const logo of logos) {
    try {
      await download(logo.url, path.join(dir, logo.name));
      console.log(`Downloaded ${logo.name}`);
    } catch (e) {
      console.error(`Failed ${logo.name}:`, e.message);
    }
  }
}
run();
