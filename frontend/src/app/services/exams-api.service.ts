import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamsApiService {

  private readonly baseUrl = 'http://localhost:3000/api/exams';

  private readonly http = inject(HttpClient);


  public getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.baseUrl);
  }

  public createExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(this.baseUrl, exam);
  }
}
