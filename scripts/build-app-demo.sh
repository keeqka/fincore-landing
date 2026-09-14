#!/usr/bin/env bash
# Regenerates public/app-demo/ — a static build of the real Mini App
# (../home/app) in mock-data mode, embedded via <iframe> in the landing
# page's scene sections (see src/components/ui/AppFrame.tsx) so the
# screenshots shown on the landing page are the real product, not
# hand-drawn mockups that drift out of sync after a redesign.
#
# Run this again any time home/app's UI changes and you want the landing
# page to reflect it.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
APP_DIR="$(cd "$REPO_ROOT/../home/app" && pwd)"
OUT_DIR="$REPO_ROOT/public/app-demo"
ENV_FILE="$APP_DIR/.env.local"
ENV_BACKUP="$APP_DIR/.env.local.build-demo-backup"

# Mock mode requires VITE_SUPABASE_* to be unset — move .env.local aside for
# the duration of this build only, regardless of the build's exit status.
# Absolute paths throughout: this trap must restore the right file even if
# the working directory has changed by the time it fires.
restore_env() {
  if [ -f "$ENV_BACKUP" ]; then
    mv "$ENV_BACKUP" "$ENV_FILE"
  fi
}
trap restore_env EXIT

if [ -f "$ENV_FILE" ]; then
  mv "$ENV_FILE" "$ENV_BACKUP"
fi

(cd "$APP_DIR" && npx vite build --base=/app-demo/ --outDir dist-demo)

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"
cp -r "$APP_DIR/dist-demo/." "$OUT_DIR/"
rm -rf "$APP_DIR/dist-demo"

echo "Rebuilt $OUT_DIR from $APP_DIR"
