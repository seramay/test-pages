const button = document.querySelector('button');
const list = document.querySelector('li')
button.addEventListener('click', () => {
  list.classList.add('todo_done');
})