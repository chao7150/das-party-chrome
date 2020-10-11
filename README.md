## das-party-chrome

dアニメストアの再生位置を他人と共有するchrome拡張です。

[netflixparty](https://github.com/netflixparty1/netflixparty-chrome)を参考にしています。

## 使い方

1. dアニメストアの再生画面を開く
1. das-party-chromeのアイコンをクリックする
1. create roomボタンを押す
1. ページが再読込され、URLの末尾にroomid=xxxxxが付与される
1. 再生位置を共有したい相手に新しいURLを教えて開いてもらう
1. 再生・一時停止・シークが共有されるようになる
1. 共有をやめるときはURL末尾のroomid=xxxxxを削除して再読込する

## インストール

1. [リリースページ](https://github.com/chao7150/das-party-chrome/releases/latest)からzipファイルをダウンロードする
1. 任意のディレクトリに解凍する
1. Google Chromeで[chrome://extensions/](chrome://extensions/)を開く
1. デベロッパーモードを有効にする
1. `パッケージ化されていない拡張機能を読み込む` をクリックする
1. 先程解凍して作られたbuildディレクトリを選択する
