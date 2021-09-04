// 用語解説のアコーディオン機能
// 全てのtitleクラスの配列で取得
const termTitle = document.querySelectorAll(".title");

function toggle() {
  // thisでDOM要素取得(以下イベント参照)し、同じ階層の次の要素(そのタイトルに対する解説本文の要素)を取得して代入
  const content = this.nextElementSibling;
  const iconTurn = this.childNodes[2];
  // toggleを使うことにより、指定したクラスがない場合はaddClass、ある場合はremoveClassで処理
  content.classList.toggle("disp_block");
  content.classList.toggle("disp_none");
  iconTurn.classList.toggle("title_icon-rotate")
}

// イベント発火用の読み込みコードを、繰り返し処理を用いて記述
for (let i = 0; i < termTitle.length; i++) {
  termTitle[i].addEventListener("click", toggle);
}




// document.write でHTMLへ出力した文章はHTMLファイルで挿入している<script>の読み込み位置によって決まる
document.write("↩️");


// CodePenでサイトに埋め込み
var x = 10;
console.log(x);
x++;
console.log(x);
++x;
console.log(x);