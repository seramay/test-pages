const question = '日本で最も多いとされている血液型は次のうちどれ？';
const answers = [
  'A型',
  'B型',
  'O型',
  'AB型'
];
const correct = 'A型'

// HTML要素は名前の前に$つけると分かりやすい
const $button = document.getElementsByTagName('button');

// クイズの出題文と解答用ボタンのテキスト代入の関数
const setupQuiz = () => {
  document.querySelector('#js-question').textContent = question; 
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
  }
}

// クイズ関数呼び出し
setupQuiz();

// クリックイベントの条件文を関数化
const clickHandler = (e) => {
  // console.log(e); // PointerEventオブジェクトのデバッグ表示。targetでこのボタン要素がハイライトされるのが分かる。
  if(correct === e.target.textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
}

$button[0].addEventListener('click', (e) => {
  clickHandler(e);
})

$button[1].addEventListener('click', (e) => {
  clickHandler(e);
})

$button[2].addEventListener('click', (e) => {
  clickHandler(e);
})

$button[3].addEventListener('click', (e) => {
  clickHandler(e);
})
