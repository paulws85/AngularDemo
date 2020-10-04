import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private restApiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.restApiUrl);
  }
  updateStudent(student: Student, id: number): Observable<Student> {
    const url = `${this.restApiUrl}/${id}`;
    return this.httpClient.put<Student>(url, student, this.httpOptions);
  }
  addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.restApiUrl, student, this.httpOptions);
  }
  delete(id: number): Observable<any> {
    const url = `${this.restApiUrl}/${id}`;
    return this.httpClient.delete<Student>(url, this.httpOptions);
  }

}
