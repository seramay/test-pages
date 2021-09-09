const question = '日本で最も多いとされている血液型は次のうちどれ？';
const answers = [
  'A型',
  'B型',
  'O型',
  'AB型'
];
const correct = 'A型'

document.querySelector('#js-question').textContent = question; 
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];

// クリックイベントで答え合わせ
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  if(correct === document.getElementsByTagName('button')[0].textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
})