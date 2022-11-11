import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apirul= 'https://localhost:4200/Employee';

  constructor(private http:HttpClient) { }

  GetEmployee(): Observable<Employee> {
    return this.http.get<Employee>(this.apirul);
  }
}
