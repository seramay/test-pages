const buttonList = document.querySelectorAll('button');
// 取得したNodeListオブジェクト「buttonList」をArrayオブジェクトに変換し、forEachで反復適用
[...buttonList].forEach((button) => {
  button.addEventListener('click', () => {
    const list = button.closest("li");
    list.classList.add('todo_done');
})
})