const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const filterComplated = document.getElementById("filter-completed");
const sortPriority = document.getElementById("sort-priority");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const title = document.getElementById("todo-title").value;
    const desc = document.getElementById("todo-desc").value;
    const priority = document.querySelector("input[name='priority']:checked");

    if (!title || !priority) {
      alert("Başlık ve Öncelik zorunludur!");
      return;
    }

    const li = document.createElement("li");
    li.dataset.priority = priority.value;
    li.innerHTML = `<div class="list-content">
              <strong>${title}</strong> (${priority.value}) - ${desc}
            </div>
            <div class="button-wrapper">
              <button class="btn complete-btn">Tamamla</button>
              <button class="btn delete-btn">Sil</button>
            </div>`;

    todoList.appendChild(li);
    todoForm.reset();
  } catch (error) {
    console.error("Görev eklerken bir hata oluştu: ", error);
  }
});

todoList.addEventListener("click", (e) => {
  try {
    if (e.target.classList.contains("complete-btn")) {
      e.target.classList.toggle("completed");
      e.target.innerHTML = e.target.classList.contains("completed")
        ? "Tamamlandı"
        : "Tamamla";
    }
    if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.parentElement.remove();
    }
  } catch (error) {
    console.error("Görev işleme bir hata oluştu: ", error);
  }
});

filterComplated.addEventListener("click", (e) => {
  try {
    if (e.target.id === "filter-completed") {
      let listItem = todoList.firstElementChild;
      let showCompleted = e.target.innerText.trim() === "Tamamlananlar";

      // yapay zekadan yardım aldım bu kısımda
      while (listItem) {
        let completeBtn = listItem.querySelector(".complete-btn");
        if (completeBtn) {
          if (showCompleted) {
            listItem.style.display = completeBtn.classList.contains("completed")
              ? "flex"
              : "none";
          } else {
            listItem.style.display = "flex";
          }
        }
        listItem = listItem.nextElementSibling;
      }
      e.target.innerHTML = showCompleted ? "Hepsi" : "Tamamlananlar";
    }
  } catch (error) {
    console.error("Filtreleme sırasında bir hata oluştu: ", error);
  }
});

// bu kısımdada yapay zekadan yardım aldım
sortPriority.addEventListener("click", () => {
  try {
    Array.from(todoList.children)
      .sort((a, b) => {
        const priorities = { Düşük: 1, Orta: 2, Yüksek: 3 };
        return priorities[b.dataset.priority] - priorities[a.dataset.priority];
      })
      .forEach((listItem) => todoList.appendChild(listItem));
  } catch (error) {
    console.error("Sıralama sırasında bir hata oluştu: ", error);
  }
});
