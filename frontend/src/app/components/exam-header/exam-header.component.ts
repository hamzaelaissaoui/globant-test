import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-exam-header',
  imports: [],
  templateUrl: './exam-header.component.html',
  styleUrl: './exam-header.component.scss'
})
export class ExamHeaderComponent {
  public readonly title = input<string>('Mes examens');
  public readonly itemCount = input<number>(0);
  public readonly organizing = output<void>();
  
  public onOrganize(): void {
    this.organizing.emit();
  }
}
