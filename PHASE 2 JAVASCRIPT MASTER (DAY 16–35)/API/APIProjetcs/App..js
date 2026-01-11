function renderUsers(list) {
  userDiv.innerHTML = "";

  if (list.length === 0) {
    userDiv.innerText = "No users found";
    return;
  }

  list.forEach((user, index) => {
    let p = document.createElement("p");

    p.innerHTML = `
      <b>${user.name}</b><br>
      <small>${user.email}</small><br>
      <button>Delete</button>
    `;

    let deleteBtn = p.querySelector("button");

    deleteBtn.addEventListener("click", () => {
      usersData.splice(index, 1);
      renderUsers(usersData);
    });
    userDiv.innerHTML="User deleted"

    userDiv.appendChild(p);
    deleteBtn.style.color='red'
  });
}
