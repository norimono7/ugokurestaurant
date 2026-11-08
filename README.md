# Food that runs

架空の都会「走町」を舞台にした、フードデリバリー体験サイトです。

## GitHub Pages で公開する

1. GitHub リポジトリの **Settings → Pages** を開く。
2. **Build and deployment** の **Source** を **GitHub Actions** に変更する。
3. `main` ブランチへ push する。
4. `Deploy to GitHub Pages` ワークフロー完了後、Pages の URL にアクセスする。

`index.html` を入口にした静的サイトなので、ビルドコマンドや追加の依存関係は必要ありません。