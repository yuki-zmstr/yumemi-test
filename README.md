# 株式会社ゆめみフロンドエンド提出課題

## 開発環境の構築

```Bash
git clone https://github.com/yuki-zmstr/yumemi-test.git
cd yumemi-test
npm ci
```

## 環境変数の設定

`.env.development`　を作成し、[RESAS API](https://opendata.resas-portal.go.jp/) にて APIKEY を取得してください。

```bash
# .env.development内
REACT_APP_API_KEY=取得したAPIKEYを入力
```

## 起動方法

```bash
npm start
```

## Format, Lint チェック

```bash
npm format
npm lint
```

## テスト

```bash
npm test
```

## 改善点

1. 地方ごとに、Select All ボタンと Clear All ボタンを追加。
2. 描画ボタンを追加することで、チェックを入れたり外したりするたびにグラフが変わらないようにする。

## 難しかった点

1. eslint の rule の中で、`"arrow-body-style": 0` 　にしないと map の中にあるべき return が自動的に消される。

## 最後に一言

凄く楽しんで取り組めました！favicon も御社のものを使わせて頂きました。　- 高橋
