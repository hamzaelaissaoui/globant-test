import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsListComponent } from './exams-list.component';

describe('ExamensListComponent', () => {
  let component: ExamsListComponent;
  let fixture: ComponentFixture<ExamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
