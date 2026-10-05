"""Check the deployed entry, DOM IDs, catalog paths and untouched photo blobs."""
from pathlib import Path
import hashlib
import json
import re

root = Path(__file__).resolve().parents[1]
html = (root / 'index.html').read_text()
js = (root / 'final.js').read_text()
scripts = re.findall(r'<script[^>]+src="([^"]+)"', html)
styles = re.findall(r'<link[^>]+href="([^"]+)"', html)
assert scripts == ['final.js?v=8'], scripts
assert styles == ['final.css?v=8'], styles
ids = re.findall(r'\bid="([^"]+)"', html)
assert len(ids) == len(set(ids)), 'Duplicate HTML IDs'
dynamic_ids = set(re.findall(r'\bid="([^"]+)"', js))
selected = set(re.findall(r"\$\('([^']+)'\)", js))
assert selected <= set(ids) | dynamic_ids, selected - set(ids) - dynamic_ids

baseline = json.loads((root / 'tests/assets-baseline.json').read_text())
paths = set(re.findall(r"[\"'](assets-final/[^\"']+\.webp)[\"']", js))
assert paths == set(baseline), (paths - set(baseline), set(baseline) - paths)
missing = []
for relative, item in baseline.items():
    file = root / relative
    if not file.is_file():
        missing.append(relative)
        continue
    data = file.read_bytes()
    actual = hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()
    assert actual == item['sha'], f'Photo changed: {relative}'
assert not missing, f'Missing photos (must be listed separately): {missing}'
assert sum(item['status'] == 'previously-verified' for item in baseline.values()) == 19
assert sum(item['status'] == 'unresolved' for item in baseline.values()) == 30
assert 'storeGrid' not in js and 'window.ASSETS' not in js
print('PASS: one execution path, all selectors, 49 unchanged image blobs (19 previously verified / 30 unresolved), 0 missing')
