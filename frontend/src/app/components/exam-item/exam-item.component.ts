import { Component, input } from '@angular/core';
import { BrandTextComponent } from '../brand-text/brand-text.component';
import { Exam } from '../../models/exam.model';
import { UsernamePipe } from '../../pipes/username.pipe';
import { DatePipe } from '@angular/common';
import { StatusDirective } from '../../directives/status.directive';

@Component({
  selector: 'app-exam-item',
  imports: [BrandTextComponent, UsernamePipe, DatePipe, StatusDirective],
  templateUrl: './exam-item.component.html',
  styleUrl: './exam-item.component.scss',
})
export class ExamItemComponent {
  public exam = input.required<Exam>();
}
