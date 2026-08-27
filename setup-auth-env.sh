#!/bin/bash
# Add Vercel environment variables for Google auth.
# Run once after creating OAuth credentials in Google Cloud Console.
#
# Prerequisites:
#   1. Create OAuth 2.0 Client ID in Google Cloud Console
#      https://console.cloud.google.com/apis/credentials
#   2. Add authorized redirect URI:
#      https://<your-vercel-url>/api/auth/callback/google
#   3. Copy Client ID and Client Secret
#
# Usage:
#   bash /c/Users/d33naz/Documents/Businesses/LiAIzon/dashboard/setup-auth-env.sh
#
# This script adds the env vars to Vercel via CLI.
# You'll be prompted for the values interactively.

set -euo pipefail

DASHBOARD_DIR="/c/Users/d33naz/Documents/Businesses/LiAIzon/dashboard"
cd "$DASHBOARD_DIR"

echo "→ Adding GOOGLE_CLIENT_ID to Vercel (Production)..."
npx vercel env add GOOGLE_CLIENT_ID Production 2>&1

echo ""
echo "→ Adding GOOGLE_CLIENT_SECRET to Vercel (Production)..."
npx vercel env add GOOGLE_CLIENT_SECRET Production 2>&1

echo ""
echo "✓ Auth environment variables configured."
echo ""
echo "Next: commit and push to redeploy with auth enabled."
echo "  git add . && git commit -m 'enable google auth' && git push"
