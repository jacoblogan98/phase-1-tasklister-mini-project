document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = form.querySelector('#new-task-description');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildList(input.value);
    form.reset();

  function buildList(todo) {
    let p = document.createElement('p');
    let deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', handleDelete)
    deleteButton.textContent = ' x';
    p.textContent = `${todo} `;
    p.appendChild(deleteButton)
    document.querySelector('#list').appendChild(p);
  }

  function handleDelete(e) {
    e.target.parentNode.remove();
  }
  })
});
