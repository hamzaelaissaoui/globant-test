import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  standalone: true,
  pure: true,
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  public transform(value: Student): string {
    return `${value.first_name.charAt(0).toUpperCase() + value.first_name.slice(1)}.${value.last_name.charAt(0).toUpperCase()}`;
  }

}
