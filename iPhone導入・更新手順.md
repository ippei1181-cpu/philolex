# PhiloLex // NIGHT CITY v3 — iPhone PWA

Cyberpunk UI版です。

## v3の主な変更
- Steampunk → Cyberpunkへ全面変更
- ネオンシアン / マゼンタ / 紫を中心にしたNight City風HUD
- スキャンライン、ネオンレイン、グリッチ、画面フラッシュ、画面振動風演出
- 報酬系：NEON XP / DATA SHARDS / LINK / NEURAL OVERDRIVE / BLACK ICE / DATA DROP / CACHE CRATE
- 1500語を 10 SECTION × 150語 に固定
- AUTO NETとは別に、SECTIONを選択して集中学習可能
- 各SECTIONの「開始済み / 定着済み」をホームで表示
- 全体の「学習開始済み / 現在学習中 / 未学習」を明示
- カード裏面に英語用例＋日本語訳を表示
- iPhoneホーム画面から起動可能

## GitHub Pagesをすでに設定済みの場合
GitHubの `philolex` リポジトリを開き、
`Add file` → `Upload files` からこのフォルダの中身をすべてアップロードしてください。
既存ファイルと同名のものは新しい版へ更新されます。
最後に `Commit changes` を押します。

GitHub Pagesの設定（main / root）は変更不要です。
数十秒〜数分後、iPhoneのPhiloLexを一度終了して再起動してください。
古い表示が残る場合はSafariでサイトを開いて再読み込みしてから、ホーム画面版を再起動してください。


## v3.1
自己評価ボタンは学習判断を優先し、Cyberpunk用語ではなく「覚えていない / うろ覚え / 覚えた / しっかり覚えた」に変更しました。


## v3.2 — Safari更新対策
- `index.html` はネットワーク優先で取得します。
- Service Workerは起動時に更新確認します。
- 新しいService Workerへ切り替わると一度だけ自動再読み込みします。
- 画面右上付近に `BUILD 3.2` が表示されれば最新版です。

### Safariが古い版のままの場合
1. iPhoneのホーム画面版PhiloLexを完全終了。
2. SafariでGitHub PagesのURLを開く。
3. URL末尾に `?v=32` を付けて開く。
4. それでも古ければ、iPhoneの「設定」→「Apps」→「Safari」→「詳細」→「Webサイトデータ」で
   `github.io` または `ippei1181-cpu.github.io` のデータを削除。
5. Safariでサイトを再度開き、最新版を確認。
6. 必要なら古いホーム画面アイコンを削除して「ホーム画面に追加」をやり直す。


## v3.3
- お任せモードで10語セッションを終えた後の追加学習を、5語ではなく **10語追加** に変更。
- 完了画面のボタンは `+10 DATA PACKETS`。
- 押すとお任せモードでさらに10語開始。
- Safari更新確認用表示は `BUILD 3.3`。


## v3.4 — AUTO NET設定反映修正
- お任せモードは「1回の単語数」を常に現在の設定から取得します。
- お任せモードは「新規単語比率」を常に現在の設定から取得します。
- QUICK JACK-INでも 10語 / 20% を固定せず、現在の設定を使います。
- セッション終了後の追加学習も固定10語ではなく、現在設定している1回の単語数を使います。
- 学習中HUDに「今回の語数」と「NEW比率」を表示します。
- Safari更新確認用表示は `BUILD 3.4`。
