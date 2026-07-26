import json
import urllib.request

def get_notion_data(page_id):
    url = "https://www.notion.so/api/v3/loadPageChunk"
    headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    payload = {
        "pageId": page_id,
        "chunkNumber": 0,
        "cursor": {"stack": []},
        "verticalStack": False
    }
    req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            return data
    except Exception as e:
        print(f"Error fetching {page_id}: {e}")
        return None

pages = {
    "mmt": "3a7be7f0-e9f3-80b6-a1d2-e2807d0dc7f2",
    "swiggy": "3a7be7f0-e9f3-80a0-85c4-ec0f298ff7ec",
    "ev": "3a9be7f0-e9f3-8000-b3ad-fd2715f1aa00"
}

for name, pid in pages.items():
    print(f"Fetching {name}...")
    data = get_notion_data(pid)
    if data:
        with open(f"/Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/notion_{name}_data.json", "w", encoding="utf-8") as out:
            json.dump(data, out, indent=2)
        print(f"Saved notion_{name}_data.json")
