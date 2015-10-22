/**
 *
 */





//文字を格納する配列
var moji = new Array("A","B","C","D","E","F","G","H","I",
                     "J","K","L","M","N","O","P","Q","R",
                     "S","T","U","V","W","X","Y","Z","-");

//問題として入力する文字列
//単語は","で区切って入力
var moji1 = "UIRUSU,MEIWAKUME-RU,NARISUMASI,HUSEIAKUSESU,ZYOUHOUROUEI,KOZINNZYOUHOU,ZEIZYAKUSEI,SAIBA-TERO,SUMA-TOFONNAPURI,KAIZAN,PASUWA-DO,SEKYURITEXI-,WANKURIKKUSAGI,NISESAITO,UIRUSUTAISAKUSOFUTO,ENNKAKUSOUSA";
//  ↑↓は【必ず】対応させて入力すること(見本と実際の問題が間違って出力されるから)
var mihon = "ウイルス,迷惑メール,なりすまし,不正アクセス,情報漏えい,個人情報,ぜい弱性,サイバーテロ,スマートフォンアプリ,改ざん,パスワード,セキュリティー,ワンクリック詐欺,偽サイト,ウイルス対策ソフト,ランサムウェア,遠隔操作";
//キーコードを格納する配列
var kcode = new Array(65,66,67,68,69,70,71,72,73,
                      74,75,76,77,78,79,80,81,82,
                      83,84,85,86,87,88,89,90,189);

//配列mojiに対応した数値を格納する配列(インデックス配列)
var rnd = new Array();

//乱数を格納する配列
var rm = new Array();

//単語の長さを格納する配列4
var g_lg=new Array();

//グローバル変数群
var mondai;       //問題の文字列を格納
var cnt=0;             //何問目か格納
var wcn=0;			  //ミスタイプカウント
var qs=16;				//問題数 (増減に合わせて変更すること)
var q_cnt=0;
var typStart,typEnd;   //開始時と終了時の時刻を格納
var sc_cnt=0;
var p_cnt=0;
var p_flag=0;

var mihon_s;			//スクリーン出力用変数

var mihon_arr=new Array(); //問題見本分割配列



//0～4までの乱数を5個作成して配列rmに格納する関数
function ransu()
{
  for ( var i = 0 ; i < qs ; i++ )
  {
    rm[i] = Math.floor( Math.random() * qs );
  }
}

//","区切りの文字列moji1を文字単位に分解し、それに対応した数値を配列rndに格納する関数
function set()
{
  var str = moji1.split(",");					//単語単位に分割
  var l = 0;
  var st = new Array();							//文字単位に分割した単語を格納する配列

  ransu();										//乱数発生

  for(var i = 0 ; i < str.length ; i++){
	var lg = str[rm[i]].length;					//単語の文字列の長さを取得
	g_lg[i] = lg;								//文字列の長さを配列に格納
	for(var s = 0 ; s < lg ; s++){
		for(var u = 0 ; u < 27 ; u++){
			if(moji[u] == str[rm[i]].charAt(s)){//文字探索
				rnd[l] = u;						//同じ文字が見つかったらその数値情報を配列に格納
				l++;							//配列のインデックスを移動
				break;							//次の文字へ
			}
		}
	}
  }
}

function gameKanri()
{
	gameSet();
	document.onkeydown = typeGame;  //キー押下時に関数typeGame()を呼び出す


}


//タイピングゲームの問題をセットする関数
function gameSet()
{

  //問題文とカウント数をクリアする

  mondai ="";


  cnt=0;
  p_flag=0;
  //乱数作成関数の呼び出し
  set();

  mihon_arr=mihon.split(",");
  mihon_s=mihon_arr[rm[0]];
  //問題文の作成

  	for(var j=0;j<g_lg[0];j++)
  	{
    	mondai=mondai+moji[rnd[j]];

    }


  //問題枠に表示する
  document.getElementById("waku1").style.color = '#0000ff';
  document.getElementById("waku2").style.color = '#ff0000';

  document.getElementById("waku").style.fontSize = '24px';
  document.getElementById("waku1").style.fontSize = '24px';
  document.getElementById("waku2").style.fontSize = '24px';
  document.getElementById("mihon").style.fontSize = '48px'


  document.getElementById("mihon").innerHTML=mihon_s;

  //-->del 2015/10/20
  //document.getElementById("waku").innerHTML = mondai;
   //document.getElementById("waku1").innerHTML = "";
    //document.getElementById("waku2").innerHTML = "";
  //<--del end

  //-->add 2015/10/20
  document.getElementById("waku1").innerHTML = mondai.slice(0,0);
  document.getElementById("waku2").innerHTML = mondai.charAt(0);
  document.getElementById("waku").innerHTML = mondai.slice(1,mondai.length);
  //<--add end

  document.getElementById("q_count").innerHTML = q_cnt;

}

//文字切り取り関数
function sub_str(s,l)
{
	//-->del 2015/10/10
	//問題文の頭の一文字を切り取る
      //mondai= mondai.substring(1,mondai.length);


      //問題枠に表示する
      //document.getElementById("waku").innerHTML = mondai;
	//<--del end


	//-->add 2015/10/10
      document.getElementById("waku1").innerHTML = mondai.slice(0,s);
      document.getElementById("waku2").innerHTML = mondai.charAt(s);
      document.getElementById("waku").innerHTML = mondai.slice(s+1,l);
      //<-- add end

}

function result(){

	document.getElementById("waku1").innerHTML = "";
    document.getElementById("waku2").innerHTML = "";
    document.getElementById("mihon").innerHTML = "";

	//全文字入力していたら、終了時間を記録する
    typEnd = new Date();

    //終了時間－開始時間で掛かったミリ秒を取得する
    var keika = typEnd - typStart;

    //1000で割って「切捨て」、秒数を取得
    var sec = Math.floor( keika/1000 );

    //1000で割った「余り(%で取得できる）」でミリ秒を取得
    var msec = keika % 1000;

    //問題終了を告げる文字列を作成
    var fin="GAME終了　時間："+sec+"秒"+msec
    var wng="ミスタイプ数 : "+wcn;

    var sc=100000-(keika*2+wcn*100-sc_cnt*100-p_cnt*1000);

    var sc_s="スコア : "+sc+" パーフェクト: "+p_cnt+" 打った文字数: "+sc_cnt;




    //問題枠にゲーム終了を表示
    document.getElementById("waku").innerHTML = fin;
    document.getElementById("q_count").innerHTML = wng;
    document.getElementById("score").innerHTML = sc_s;

    var xhr=new XMLHttpRequest();

    xhr.onreadystatechange=readyStateChange();

    xhr.open("GET",'test.txt',false);
    xhr.send("");

}

function readyStateChange(){
	if(req.readyState==4){
		alert(req.responseText);
	}
}

//キー入力を受け取る関数
function typeGame(evt)
{
  var kc;  //入力されたキーコードを格納する変数
  var lg = mondai.length;


  //入力されたキーのキーコードを取得


  if (document.all)
  {
    kc = event.keyCode;
  }
  else
  {
    kc = evt.which;
  }
  //入力されたキーコードと、問題文のキーコードを比較
  if (kc == kcode[ rnd[cnt] ])
  {
    //以下、キーコードが一致した時の処理

    //最初の1文字が入力された時間を記録する
    if (q_cnt==0)
    {
      typStart = new Date();
    }

    cnt++; //カウント数を＋１にする
    sc_cnt++;

    //全文字入力したか確認
    if ( cnt < g_lg[0])
    {
      sub_str(cnt,lg);

    }
    else
    {
    	q_cnt++;
    	if(q_cnt==10){
    		result();
    	}else{
    		if(p_flag==0)p_cnt++;
    		gameSet();
    	}

    }

  }else{
	  p_flag=1;
      wcn++;
  }

}