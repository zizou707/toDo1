class Todo {
    constructor(id,text,completed=false){
        this.id=id;
        this.text=text;
        this.completed=completed;
    }
    toggleCompleted(){this.completed=!this.completed}
}

class TodosList  {
    constructor(){
        this.todos=[];
    }
    add_Todo(text){
        const newTodo=new Todo(Date.now(),text)
        this.todos.push(newTodo);
        return newTodo
     }
     deleteTodo(id){
        const indexToDelete=this.todos.findIndex((todo) => todo.id === id);
        if (indexToDelete !== false) {
            this.todos.splice(indexToDelete, 1);
          }
        }
     }

     function addTodo() {
        const inputElement = document.getElementById("newTodo");
        const todoText = inputElement.value;
    
        if (todoText.trim() !== "") {
          var todolist = new TodosList()
          const newTodo =  todolist.add_Todo(todoText);
          displayTodo(newTodo);
          inputElement.value = "";
        }
        
      }  
        
 function  displayTodo(todo){
  const todoListElement = document.getElementById("todoList");
  const li = document.createElement("li");
  li.innerHTML = `<input type='checkbox' ${todo.completed ? "checked" :""} onclick="todoList.toggleCompleted(${todo.id})">
  <span>${todo.text}</span>
          <button onclick="deleteTodo(${todo.id})" style="margin-left: auto;">Delete</button>`;
   todoListElement.appendChild(li);
   
 }
 function  deleteTodo(){

}

     /* displayTodo(todo) {
        const todoListElement = document.getElementById("todoList");
    
        const li = document.createElement("li");
        li.innerHTML = 
          <input type="checkbox" ${
            todo.completed ? "checked" : ""
          } onclick="todoList.toggleCompleted(${todo.id})">
          <span>${todo.text}</span>
          <button onclick="deleteTodo(${
            todo.id
          })" style="margin-left: auto;">Delete</button>
        ;
    
        todoListElement.appendChild(li);
      }
    } */



