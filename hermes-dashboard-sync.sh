#!/bin/bash
# hermes-dashboard-sync.sh
# Run after Hermes has updated public/data.json.
# Commits the new data and pushes to GitHub — Vercel auto-redeploys.
#
# Usage (from Hermes cron job):
#   bash /c/Users/d33naz/Documents/Businesses/LiAIzon/dashboard/hermes-dashboard-sync.sh
#
# The data.json must already exist and be valid before running this.

set -euo pipefail

DASHBOARD_DIR="/c/Users/d33naz/Documents/Businesses/LiAIzon/dashboard"
cd "$DASHBOARD_DIR"

# Validate data.json
if [ ! -f "public/data.json" ]; then
  echo "FAIL: public/data.json not found" >&2
  exit 1
fi

if ! python3 -c "import json; json.load(open('public/data.json'))" 2>/dev/null; then
  echo "FAIL: public/data.json is not valid JSON" >&2
  exit 1
fi

# Commit and push
git add public/data.json
git commit -m "Update dashboard state ($(date -u +%Y-%m-%dT%H:%M:%SZ))" || {
  echo "No changes — data.json unchanged" >&2
  exit 0
}
git push origin master

echo "OK: dashboard state synced — Vercel will auto-redeploy"
