//Vue Directives

//v-bind - binds attributes (like a prop in react) to the data in data (state in react)
<TodoItem v-bind:todo="todo" />

//v-for - a for loop
<div v-for="todo in todos" v-bind:key="todo.id">
    <TodoItem v-bind:todo="todo" v-on:del-todo="deleteTodo(todo.id)" />
</div>

//v-on - somewhat like an event listener, tells vue what to do when an event is emitted, (submit, click, etc..)
<form v-on:submit="addTodo">
    <input type="text" v-model="title" name="title" placeholder="Add Todo...">
    <input type="submit" value="Submit" class="btn">
</form>


//v-model - similar to v-bind but used for updating data in data (updating state in react) from user input sources like forms
<form v-on:submit="addTodo">
    <input type="text" v-model="title" name="title" placeholder="Add Todo...">
    <input type="submit" value="Submit" class="btn">
</form>

//v-if - a conditional if statement 
<div id="app-3">
  <span v-if="seen">Now you see me</span>
</div>

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})