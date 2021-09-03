const buttonList = document.querySelectorAll('.done_button');
// 取得したNodeListオブジェクト「buttonList」をArrayオブジェクトに変換
// 思わぬ動作を防止する為に配列オブジェクトに変換している
[...buttonList].forEach((button) => {
  button.addEventListener('click', () => {
    const list = button.closest('li');
    list.classList.add('todo_done');
  })
})

const todoList = document.querySelector('#todo_list');
const addTodoButton = document.querySelector('#add_button');
addTodoButton.addEventListener('click', () => {
  const input = document.querySelector('input');
  const text = input.value;
  const li = document.createElement('li');
  li.innerText = text
  li.classList.add('todo');
  todoList.appendChild(li);
})