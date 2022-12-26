# 株式会社ゆめみフロンドエンド提出課題

## 開発環境の構築

```Bash
git clone https://github.com/yuki-zmstr/yumemi-test.git
cd yumemi-test
npm ci
```

## 環境変数の設定

ルートディレクトリに `.env.development`　を作成し、[RESAS API](https://opendata.resas-portal.go.jp/) にて APIKEY を取得してください。

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
npm format-test #修正せずテストだけしたい場合
npm lint
npm lint-test #修正せずテストだけしたい場合
```

## テスト

```bash
npm test
```

## 詰まった点

1. api の呼び出しのテストコードを書くところで詰まっています。詳しくは `ChoosePrefectures.test.jsx` 内にコメントを残しています。
   → ぜひ相談させてください！勉強したいので。

## 改善点

1. 地方ごとに、Select All ボタンと Clear All ボタンを追加。
2. 描画ボタンを追加することで、チェックを入れたり外したりするたびにグラフが変わらないようにする。
3. Custom Tooltip を、人口が多い順に並ぶようにする。

## 最後に一言

- 凄く楽しんで取り組めました！アプリの favicon も御社のものを使わせて頂きました。　- 高橋
