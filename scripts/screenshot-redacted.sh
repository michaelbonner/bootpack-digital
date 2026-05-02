#!/usr/bin/env bash
# Capture a redacted full-page screenshot of a URL using agent-browser.
#
# Reuses the current agent-browser session, so log in once first:
#   agent-browser open https://app.example.com/sign-in
#   agent-browser fill @e1 "user@example.com"
#   agent-browser fill @e2 "password"
#   agent-browser click @e3
#
# Then capture pages:
#   scripts/screenshot-redacted.sh https://app.example.com/users src/images/foo/users.jpg
#
# Pass --no-redact to skip the PII rewrite (useful for public marketing pages).
set -euo pipefail

REDACT=1
if [[ "${1:-}" == "--no-redact" ]]; then
	REDACT=0
	shift
fi

if [[ $# -ne 2 ]]; then
	echo "usage: $(basename "$0") [--no-redact] <url> <out.jpg>" >&2
	exit 64
fi

URL="$1"
OUT="$2"
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REDACTOR="$SCRIPT_DIR/redact-pii.js"

mkdir -p "$(dirname "$OUT")"

agent-browser open "$URL"
agent-browser wait --load networkidle

if [[ $REDACT -eq 1 ]]; then
	if [[ ! -f "$REDACTOR" ]]; then
		echo "missing redactor: $REDACTOR" >&2
		exit 1
	fi
	agent-browser eval "$(cat "$REDACTOR")"
fi

agent-browser screenshot "$OUT" --full
echo "saved $OUT"
