#!/usr/bin/env sh

set -euxo pipefail

npm run lint
npm run prettier
