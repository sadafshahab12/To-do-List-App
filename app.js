let task_input = document.querySelector(".add-task input"); //user give input
let add_btn = document.querySelector(".add-task button"); //add task
// ------------------------------------------------
let msg = document.querySelector(".msg"); //display on adding task
let task_msg = document.querySelector(".task_msg"); //edit innertext
let task = document.querySelector(".task"); //display on adding task
let added_multiple = document.querySelector(".added");
let task_add = document.querySelector(".task-added"); //edit innertext by input was given by user
//remove task
let task_len = document.querySelector(".task-len");
let task_count = 0;
const task_addition = () => {
  task_count++;
  task_len.innerText = task_count;
};
const task_sub = () => {
  task_count--;
  task_len.innerText = task_count;
};

const display_task = () => {
  task.classList.remove("class", "display");
};

const task_add_msg = () => {
  msg.style.visibility = "visible";
  task_msg.textContent = "Task Added Successfully";
};
const task_done_msg = () => {
  msg.style.visibility = "visible";
  task_msg.textContent = "Task Done!";
};
const task_done = () => {
  msg.style.visibility = "hidden";
};
const add_msg_remove = () => {
  msg.style.visibility = "hidden";
};
const task_del_msg = () => {
  msg.style.visibility = "visible";
  task_msg.textContent = "Task Deleted!!!";
};
const task_del = () => {
  msg.style.visibility = "hidden";
};
const empty_task = () => {
  msg.style.visibility = "visible";
  task_msg.textContent = "Alert! Cannot Add Empty Task";
};

const append = () => {
  let input_value = task_input.value;

  if (input_value !== "") {
    let create_ele = document.createElement("div");
    create_ele.setAttribute("class", "task");
    create_ele.innerHTML = `<p class="task-added">${input_value}</p>
    <div class= "btns">
          <button class="del">Delete</button>
          <button class="done">Done</button> </div>`;

    let del = create_ele.querySelector(".task .del");
    let done = create_ele.querySelector(".btns .done");

    del.addEventListener("click", () => {
      create_ele.remove();
      task_sub();
      task_del_msg();
      if (task_count == 0) {
        task_len.innerText = "No";
      }
      setTimeout(() => {
        task_del();
      }, 800);
    });
    done.addEventListener("click", () => {
      create_ele.remove();
      task_sub();
      task_done_msg();
      if (task_count == 0) {
        task_len.innerText = "No";
      }
      setTimeout(() => {
        task_done();
      }, 800);
    });
    task_addition();

    added_multiple.append(create_ele);
    task_add_msg();
    setTimeout(() => {
      add_msg_remove();
    }, 800);
    task_input.value = "";
    display_task();
  } else {
    empty_task();
  }
};

add_btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  append();
});
