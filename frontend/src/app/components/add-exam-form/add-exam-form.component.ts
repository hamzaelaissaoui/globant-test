import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExamStatus } from '../../enums/exam-status.enum';
import { ExamsApiService } from '../../services/exams-api.service';
import { Exam } from '../../models/exam.model';

interface ExamForm {
  first_name: FormControl<string>;
  last_name: FormControl<string>;
  meeting_point: FormControl<string | null>;
  date: FormControl<string | null>;
  status: FormControl<ExamStatus>;
}

@Component({
  selector: 'app-add-exam-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-exam-form.component.html',
  styleUrl: './add-exam-form.component.scss',
})
export class AddExamFormComponent {
  public newExam = output<Exam | null>();
  public newExamForm!: FormGroup<ExamForm>;

  public constructor(private readonly examsApiService: ExamsApiService) {
    this.newExamForm = new FormGroup<ExamForm>({
      first_name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      last_name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      meeting_point: new FormControl(null),
      date: new FormControl(null),
      status: new FormControl(ExamStatus.RECHERCHE_DE_PLACE, {
        nonNullable: true,
      }),
    });
  }

  public onSubmit(): void {
    if (!this.newExamForm.valid || !this.newExamForm.value) {
      return;
    }

    const exam: Exam = {
      id: crypto.randomUUID(),
      student: {
        first_name: this.newExamForm.value.first_name!,
        last_name: this.newExamForm.value.last_name!,
      },
      meeting_point: this.newExamForm.value.meeting_point!,
      date: this.newExamForm.value.date!,
      status: +this.newExamForm.value.status!,
    };

    this.newExam.emit(exam);
    this.newExamForm.reset();
  }

  public onCancel(): void {
    this.newExamForm.reset();
    this.newExam.emit(null);
  }
}
