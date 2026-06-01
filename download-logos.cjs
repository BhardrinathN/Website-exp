const fs = require('fs');
const https = require('https');

const clients = [
  { url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg", name: "hyundai.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Ashok_Leyland_Logo.svg", name: "ashok.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/0/07/Saint-Gobain_logo.svg", name: "saintgobain.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Caterpillar_Inc._logo.svg", name: "caterpillar.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Daimler_AG_logo.svg", name: "daimler.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/TVS_Motor_Company_Logo.svg", name: "tvs.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/0/07/Royal_Enfield_Logo.svg", name: "royalenfield.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/5/52/Larsen_%26_Toubro_logo.svg", name: "lnt.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg", name: "siemens.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-Logo.svg", name: "bosch.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Renault_2021_Logo.svg", name: "renault.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg", name: "ford.svg" }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(resolve); });
    }).on('error', reject);
  });
};

(async () => {
  if (!fs.existsSync('public/logos')) fs.mkdirSync('public/logos', { recursive: true });
  for (const c of clients) {
    try {
      console.log('Downloading', c.name);
      await download(c.url, 'public/logos/' + c.name);
    } catch (e) {
      console.error(e);
    }
  }
})();
