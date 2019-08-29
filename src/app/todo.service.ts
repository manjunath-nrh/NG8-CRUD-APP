import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // base_url: string = 'http://localhost:3000';
  base_url: string = 'http://localhost:3000/companies/';
  todos = [];
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    console.log('getting all todos from the server');
    // return this.http.get<Todo[]>(`${this.base_url}/companies`);
    return this.http.get<Todo[]>(this.base_url);
  }

  getTodo(_id: string): Observable<Todo>{
    // return this.http.get<Todo>(`${this.base_url}/companies/${_id}`);
    return this.http.get<Todo>(this.base_url + _id);
  }

  addTodo(newTodo:Todo): Observable<Todo>{
    // return this.http.post<Todo>(`${this.base_url}/companies`, newTodo, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    return this.http.post<Todo>(this.base_url,newTodo);
  }

  updateTodo(editedTodo:Todo): Observable<Todo>{
    // return this.http.put<Todo>(`${this.base_url}/companies/${editedTodo._id}`, editedTodo, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    return this.http.put<Todo>(this.base_url + editedTodo._id,editedTodo);
  }

  deleteTodo(_id:string): Observable<Todo>{
    // return this.http.delete<Todo>(`${this.base_url}/companies/${_id}`);
    return this.http.delete<Todo>(this.base_url +_id);
  }
}
