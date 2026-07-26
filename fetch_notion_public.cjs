const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const urls = [
    'https://app.notion.com/p/Product-Case-Study-Designing-MakeMyTrip-s-First-Time-Flyer-Experience-for-Tier-2-3-India-3a7be7f0e9f380b6a1d2e2807d0dc7f2',
    'https://app.notion.com/p/Product-Case-Study-Fixing-Swiggy-s-Workplace-Group-Ordering-Friction-3a7be7f0e9f380a085c4ec0f298ff7ec',
    'https://app.notion.com/p/Product-Case-Study-Eliminating-Range-Anxiety-in-Inter-City-EV-Travel-3a9be7f0e9f38000b3adfd2715f1aa00'
  ];

  for (const url of urls) {
    console.log("Fetching:", url);
    const html = await fetchUrl(url);
    console.log("HTML length:", html.length);
    // search for json script tags or boot data in html
    const matches = html.match(/__notion_boot_data\s*=\s*({.*?});/s) || html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
    if (matches) {
      console.log("Found match!");
    } else {
      // check for block data in script tags
      const blocks = html.match(/"block":\{.*?\}/g);
      console.log("Blocks found:", blocks ? blocks.length : 0);
    }
  }
}

run();
