ゲームで学ぶコンピュータコンピュータセキュリティのマニュアル

使用物：eclipse、github、PC一台
主な流れ：eclipseを使用してゲームプログラムを実行

Eclipseのダウンロード方法：eclipseはつぎのURL次のからダウンロード可能、http://mergedoc.osdn.jp/

Windowsの環境変数設定

・コンピュータを右クリック->プロパティ(あるいはコントロールパネルの「システム」）->システムの詳細設定->環境変数

・環境変数でユーザ/システム環境変数のどちらかに，変数名：JAVA_HOME，変数値：C:\pleiades4.5\java\8 (要はJDKのbinがあるディレクトリの一つ上）を指定する
同じく変数名：JRE_HOME, 変数値：C:\pleiades4.5\java\8\jre (JREのbinがあるディレクトリの一つ上)を指定する。

1.eclipse Pleiades All in One Javaをクリック（私たちは4.5を使用）

2.Full Edition欄のJavaをクリック（bitは64を使用）

3.ダウンロードが開始されるので保存してください。

4.フォルダの中にeclipseファイルがあるのでその中のeclipseアプリケーションを実行するとeclipseが使えます。


ゲームの起動方法：eclipseを使用

1.githubのigakilabからpattsuan-ganmesのmasterブランチにゲームのファイルがあるのですべてコピーしてください。

2.eclipseを起動してもらい先ほどeclipceにインポートしてください。

3.ランキングを表示するためにmultiple-dwrフォルダのbuild.xmlを右クリックし実行、Antビルド(2)をクリックする

4.エクスプローラーを開き、OS、pleiades4.5、tomcat、7、bin、startupを順にクリックするとtomcatが起動される

5.titleフォルダのmenu.htmlを右クリック->次で開く->Webブラウザーでゲームを実行できます。


ゲームの起動方法：ブラウザ(eclipce内蔵のブラウザではなく、IEやChromeやfirefoxなど)を使用

**※既にeclipseでbuild.xmlのAntビルドまでが完了していることが前提　前項の1～3.を参照のこと**

1.前項4.の通りに/pleiades4.5/tomcat/7/bin内のstartupをクリックしtomcatを起動する

2.ブラウザでhttp://localhost:8080/multiple-dwr/title/menu.html　にアクセスする




ゲームの流れ：

1.ゲームは、タイピングゲーム、クイズゲーム、用語当てゲームの三種類でメニュー画面のボタンから選べます。

2.ゲームを選択するとゲームの説明画面が表示されその後ゲームが開始させます。

3.ゲームが終了するとランキング画面に行き、名前とスコアを入力してもらうとランキングが表示されます。




