import { Directive, ElementRef, input, OnInit, Renderer2 } from '@angular/core';
import { ExamStatus } from '../enums/exam-status.enum';
import { EXAM_STATUS_TEXTS } from '../constants/exam-status.constant';

@Directive({
  standalone: true,
  selector: '[examStaus]'
})
export class StatusDirective implements OnInit {
  public examStaus = input.required<ExamStatus>();

  public constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  public ngOnInit(): void {
    switch (this.examStaus()) {
      case ExamStatus.A_ORGANISER: this.renderer.addClass(this.el.nativeElement, 'organized'); break;
      case ExamStatus.ANNULE: this.renderer.addClass(this.el.nativeElement, 'canceled'); break;
      case ExamStatus.CONFIRME: this.renderer.addClass(this.el.nativeElement, 'confirmed'); break;
      default: this.renderer.addClass(this.el.nativeElement, 'waiting');
    }

    this.el.nativeElement.textContent = EXAM_STATUS_TEXTS.get(this.examStaus())
  }

}
