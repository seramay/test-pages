const quiz = [
  {
    question: '日本で最も多いとされている血液型は次のうちどれ？',
    answers: [
      'A型',
      'B型',
      'O型',
      'AB型'
    ],
    correct: 'A型'
  }, {
    question: '世界で最も多いとされている血液型は次のうちどれ？',
    answers: [
      'A型',
      'B型',
      'O型',
      'AB型'
    ],
    correct: 'O型'
  }, {
    question: 'この中で日本で最も自給率の低い食品はどれ？',
    answers: [
      'はちみつ',
      'ごま',
      'ベーコン用豚肉',
      '大豆'
    ],
    correct: 'ごま'
  }
]


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// HTML要素は名前の前に$つけると分かりやすい
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

// クイズの出題文と解答用ボタンのテキスト代入の関数
const setupQuiz = () => {
  document.querySelector('#js-question').textContent = quiz[quizIndex].question; 
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}

// クイズ関数呼び出し
setupQuiz();

// クリックイベントの条件文を関数化
const clickHandler = (e) => {
  // console.log(e); // PointerEventオブジェクトのデバッグ表示。targetでこのボタン要素がハイライトされるのが分かる。
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  // 解答後に次のクイズに行くためwhile文用の条件変数に加算
  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();

  } else {
    // 問題が全て終わった場合
    window.alert(`全問終了しました。あなたの正解数は${score}/${quizLength}です！`);

    // 終了後、放置するのも寂しいので最初に戻す
    quizIndex = 0;
    setupQuiz();
  }

}

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  })
  handleIndex++;
}
