import { Component, DestroyRef, OnInit, signal } from '@angular/core';

import { Exam } from '../../models/exam.model';
import { ExamsApiService } from '../../services/exams-api.service';
import { AddExamFormComponent } from '../add-exam-form/add-exam-form.component';
import { ExamHeaderComponent } from '../exam-header/exam-header.component';
import { ExamItemComponent } from '../exam-item/exam-item.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-exams-list',
  imports: [ExamHeaderComponent, ExamItemComponent, AddExamFormComponent],
  templateUrl: './exams-list.component.html',
})
export class ExamsListComponent implements OnInit {
  public exams = signal<Exam[]>([]);
  public showForm = signal(false);

  public constructor(
    private readonly examsApiService: ExamsApiService,
    private readonly destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this.examsApiService
      .getExams()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (exams) => {
          this.exams.set(exams);
        },
        error: (err) => {
          console.error('Error fetching exams:', err);
        },
      });
  }

  public addNewItem(): void {
    this.showForm.set(true);
  }

  public onSubmit(exam: Exam | null): void {
    if (!exam) {
      this.showForm.set(false);
      return;
    }

    this.examsApiService.createExam(exam).subscribe({
      next: (result: Exam) => {
        this.showForm.set(false);
        this.exams.set([result, ...this.exams()]);
      },
      error: (err) => {
        console.error('error: ', err);
      },
    });
  }
}
