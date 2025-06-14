import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-brand-text',
  imports: [NgClass, MatIcon],
  templateUrl: './brand-text.component.html',
  styleUrl: './brand-text.component.scss'
})
export class BrandTextComponent {
  public label = input<string | undefined | null>(undefined);
  public icon = input.required<string>();
  public type = input<string>('string');
}
