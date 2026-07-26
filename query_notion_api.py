import json
import urllib.request

def fetch_block(block_id):
    url = "https://www.notion.so/api/v3/syncRecordValues"
    headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    payload = {
        "requests": [
            {
                "pointer": {
                    "table": "block",
                    "id": block_id
                },
                "version": -1
            }
        ]
    }
    req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f"Error fetching block {block_id}: {e}")
        return None

page_ids = {
    "mmt": "3a7be7f0-e9f3-80b6-a1d2-e2807d0dc7f2",
    "swiggy": "3a7be7f0-e9f3-80a0-85c4-ec0f298ff7ec",
    "ev": "3a9be7f0-e9f3-8000-b3ad-fd2715f1aa00"
}

for name, pid in page_ids.items():
    print(f"Syncing block {name} ({pid})...")
    res = fetch_block(pid)
    if res:
        print("Success for", name, list(res.keys()))
        with open(f"sync_{name}.json", "w", encoding="utf-8") as out:
            json.dump(res, out, indent=2)
