import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @Output() save = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();
  editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  saveTodo() {
    this.save.emit(this.todo);
    this.editMode = false;
  }

  deleteTodo() {
    this.delete.emit(this.todo);
  }
}
