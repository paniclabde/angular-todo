import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  private apiBase: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiBase + '/todo');
  }

  saveTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.apiBase + '/todo/' + todo.id, todo, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiBase + '/todo', todo, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteTodo(id?: number): Observable<any> {
    return this.http.delete(this.apiBase + '/todo/' + id);
  }
}
