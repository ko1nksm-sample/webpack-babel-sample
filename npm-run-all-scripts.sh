#!/bin/sh

# 動作確認のために全てを実行するだけのスクリプト

npm run build
npm run lint
npm run test
npm run test-cov
npm run metrics
npm run start

