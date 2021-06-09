import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { TodoApiService } from '../../todo-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  textToAdd: string = "";

  constructor(private todoApiService: TodoApiService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoApiService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  saveTodo(todo: Todo) {
    this.todoApiService.saveTodo(todo).subscribe((todo) => console.log(todo));
  }

  addTodo() {
    this.todoApiService.addTodo(new Todo(this.textToAdd)).subscribe((todo) => this.todos.push(todo));
    this.textToAdd = "";
  }

  deleteTodo(todo: Todo) {
    this.todoApiService.deleteTodo(todo.id).subscribe(() => this.todos = this.todos.filter(x => x.id !== todo.id));
  }
}
