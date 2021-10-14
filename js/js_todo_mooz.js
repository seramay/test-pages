const todoList = document.querySelector('#todo_list');
const addTodoButton = document.querySelector('#add_button');

addTodoButton.addEventListener('click', () => {
  const input = document.querySelector('input');
  const text = input.value;

  if (text === "") {
    window.alert("何も入力されていません");

  } else {

    const li = document.createElement('li');
    li.innerText = text + " ";
    li.classList.add('todo');
  
    const doneButton = document.createElement('button');
    doneButton.innerText = 'done'
    doneButton.classList.add('done_button');
  
    doneButton.addEventListener('click', () => {
      const list = doneButton.closest('li');
      list.classList.add('todo_done');
    })
  
    todoList.appendChild(li);
    li.appendChild(doneButton);
    input.value = ""
  }

})